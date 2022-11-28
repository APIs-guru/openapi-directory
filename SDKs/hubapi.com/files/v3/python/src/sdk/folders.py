import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Folders:
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

    
    def delete_files_v3_folders_folder_id_archive(self, request: operations.DeleteFilesV3FoldersFolderIDArchiveRequest) -> operations.DeleteFilesV3FoldersFolderIDArchiveResponse:
        r"""Delete folder.
        Delete folder by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/folders/{folderId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFilesV3FoldersFolderIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def delete_files_v3_folders_folder_path_archive_by_path(self, request: operations.DeleteFilesV3FoldersFolderPathArchiveByPathRequest) -> operations.DeleteFilesV3FoldersFolderPathArchiveByPathResponse:
        r"""Delete folder.
        Delete folder by path.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/folders/{folderPath}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFilesV3FoldersFolderPathArchiveByPathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_v3_folders_search_do_search(self, request: operations.GetFilesV3FoldersSearchDoSearchRequest) -> operations.GetFilesV3FoldersSearchDoSearchResponse:
        r"""Search folders
        Search for folders. Does not contain hidden or archived folders.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/v3/folders/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesV3FoldersSearchDoSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionResponseFolder])
                res.collection_response_folder = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_v3_folders_update_async_tasks_task_id_status_check_update_status(self, request: operations.GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusRequest) -> operations.GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusResponse:
        r"""Check folder update status.
        Check status of folder update. Folder updates happen asynchronously.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/folders/update/async/tasks/{taskId}/status", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderActionResponse])
                res.folder_action_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_v3_folders_folder_id_get_by_id(self, request: operations.GetFilesV3FoldersFolderIDGetByIDRequest) -> operations.GetFilesV3FoldersFolderIDGetByIDResponse:
        r"""Get folder
        Get folder by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/folders/{folderId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesV3FoldersFolderIDGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Folder])
                res.folder = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_v3_folders_folder_path_get_by_path(self, request: operations.GetFilesV3FoldersFolderPathGetByPathRequest) -> operations.GetFilesV3FoldersFolderPathGetByPathResponse:
        r"""Get folder.
        Get folder by path.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/folders/{folderPath}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesV3FoldersFolderPathGetByPathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Folder])
                res.folder = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_files_v3_folders_update_async_update_properties(self, request: operations.PostFilesV3FoldersUpdateAsyncUpdatePropertiesRequest) -> operations.PostFilesV3FoldersUpdateAsyncUpdatePropertiesResponse:
        r"""Update folder properties
        Update properties of folder by given ID. This action happens asynchronously and will update all of the folder's children as well.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/v3/folders/update/async"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFilesV3FoldersUpdateAsyncUpdatePropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderUpdateTaskLocator])
                res.folder_update_task_locator = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_files_v3_folders_create(self, request: operations.PostFilesV3FoldersCreateRequest) -> operations.PostFilesV3FoldersCreateResponse:
        r"""Create folder.
        Creates a folder.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/v3/folders"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFilesV3FoldersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Folder])
                res.folder = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    