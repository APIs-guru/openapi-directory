import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Files:
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

    
    def get_files_file_id(self, request: operations.GetFilesFileIDRequest) -> operations.GetFilesFileIDResponse:
        r"""/files/{file_id}
        ### Get details for a file.
        
        Retrieve the metadata for an individual file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{file_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesFileIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFilesFileID200ApplicationJSON])
                res.get_files_file_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFilesFileID400ApplicationJSON])
                res.get_files_file_id_400_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFilesFileID404ApplicationJSON])
                res.get_files_file_id_404_application_json_object = out

        return res

    
    def post_files_file_id_get_temporary_link(self, request: operations.PostFilesFileIDGetTemporaryLinkRequest) -> operations.PostFilesFileIDGetTemporaryLinkResponse:
        r"""/files/{file_id}/get_temporary_link
        ### Get a temporary link to stream the contents of a file
        
        Generates and returns a temporary link to access the content of a file that expires in 15 minutes. The Content-Type of the link is determined automatically by the file's format.
        
        <!-- theme: info -->
        
        > #### The Link URL should not be displayed on your front-end
        > Since these links are temporary, Herald encourages you to not display the URL on your front end.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{file_id}/get_temporary_link", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFilesFileIDGetTemporaryLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFilesFileIDGetTemporaryLink200ApplicationJSON])
                res.post_files_file_id_get_temporary_link_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFilesFileIDGetTemporaryLink400ApplicationJSON])
                res.post_files_file_id_get_temporary_link_400_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFilesFileIDGetTemporaryLink404ApplicationJSON])
                res.post_files_file_id_get_temporary_link_404_application_json_object = out

        return res

    