import requests
from typing import Optional
from sdk.models import operations
from . import utils

class SSHKeys:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_ssh_keys_id_(self, request: operations.DeleteSSHKeysIDRequest) -> operations.DeleteSSHKeysIDResponse:
        r"""Delete an SSH key
        Deletes an SSH key. It cannot be used anymore.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ssh_keys/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSSHKeysIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_ssh_keys(self, request: operations.GetSSHKeysRequest) -> operations.GetSSHKeysResponse:
        r"""Get all SSH keys
        Returns all SSH key objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ssh_keys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSSHKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSSHKeys200ApplicationJSON])
                res.get_ssh_keys_200_application_json_object = out

        return res

    
    def get_ssh_keys_id_(self, request: operations.GetSSHKeysIDRequest) -> operations.GetSSHKeysIDResponse:
        r"""Get a SSH key
        Returns a specific SSH key object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ssh_keys/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSSHKeysIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSSHKeysID200ApplicationJSON])
                res.get_ssh_keys_id_200_application_json_object = out

        return res

    
    def post_ssh_keys(self, request: operations.PostSSHKeysRequest) -> operations.PostSSHKeysResponse:
        r"""Create an SSH key
        Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ssh_keys"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSSHKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSSHKeys201ApplicationJSON])
                res.post_ssh_keys_201_application_json_object = out

        return res

    
    def put_ssh_keys_id_(self, request: operations.PutSSHKeysIDRequest) -> operations.PutSSHKeysIDResponse:
        r"""Update an SSH key
        Updates an SSH key. You can update an SSH key name and an SSH key labels.
        
        Please note that when updating labels, the SSH key current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ssh_keys/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSSHKeysIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSSHKeysID200ApplicationJSON])
                res.put_ssh_keys_id_200_application_json_object = out

        return res

    