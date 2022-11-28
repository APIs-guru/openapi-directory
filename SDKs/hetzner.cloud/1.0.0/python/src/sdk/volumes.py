import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Volumes:
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

    
    def delete_volumes_id_(self, request: operations.DeleteVolumesIDRequest) -> operations.DeleteVolumesIDResponse:
        r"""Delete a Volume
        Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVolumesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_volumes(self, request: operations.GetVolumesRequest) -> operations.GetVolumesResponse:
        r"""Get all Volumes
        Gets all existing Volumes that you have available.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/volumes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumes200ApplicationJSON])
                res.get_volumes_200_application_json_object = out

        return res

    
    def get_volumes_id_(self, request: operations.GetVolumesIDRequest) -> operations.GetVolumesIDResponse:
        r"""Get a Volume
        Gets a specific Volume object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumesID200ApplicationJSON])
                res.get_volumes_id_200_application_json_object = out

        return res

    
    def post_volumes(self, request: operations.PostVolumesRequest) -> operations.PostVolumesResponse:
        r"""Create a Volume
        Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.
        
        Specifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.
        
        The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).
        
        A volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.
        
        #### Call specific error codes
        
        | Code                                | Description                                         |
        |-------------------------------------|-----------------------------------------------------|
        | `no_space_left_in_location`         | There is no volume space left in the given location |
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/volumes"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumes201ApplicationJSON])
                res.post_volumes_201_application_json_object = out

        return res

    
    def put_volumes_id_(self, request: operations.PutVolumesIDRequest) -> operations.PutVolumesIDResponse:
        r"""Update a Volume
        Updates the Volume properties.
        
        Note that when updating labels, the volume’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutVolumesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutVolumesID200ApplicationJSON])
                res.put_volumes_id_200_application_json_object = out

        return res

    