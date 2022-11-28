import requests
from typing import Optional
from sdk.models import shared, operations
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

    
    def delete_files_v3_files_file_id_gdpr_delete_archive_gdpr(self, request: operations.DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprRequest) -> operations.DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprResponse:
        r"""GDPR delete
        GDRP delete file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/files/{fileId}/gdpr-delete", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def delete_files_v3_files_file_id_archive(self, request: operations.DeleteFilesV3FilesFileIDArchiveRequest) -> operations.DeleteFilesV3FilesFileIDArchiveResponse:
        r"""Delete file
        Delete file by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/files/{fileId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFilesV3FilesFileIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_v3_files_import_from_url_async_tasks_task_id_status_check_import(self, request: operations.GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportRequest) -> operations.GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportResponse:
        r"""Check import status.
        Check the status of requested import.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/files/import-from-url/async/tasks/{taskId}/status", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileActionResponse])
                res.file_action_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_v3_files_search_do_search(self, request: operations.GetFilesV3FilesSearchDoSearchRequest) -> operations.GetFilesV3FilesSearchDoSearchResponse:
        r"""Search files
        Search through files in the file manager. Does not display hidden or archived files.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/v3/files/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesV3FilesSearchDoSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionResponseFile])
                res.collection_response_file = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_v3_files_file_id_signed_url_get_signed_url(self, request: operations.GetFilesV3FilesFileIDSignedURLGetSignedURLRequest) -> operations.GetFilesV3FilesFileIDSignedURLGetSignedURLResponse:
        r"""Get signed URL to access private file.
        Generates signed URL that allows temporary access to a private file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/files/{fileId}/signed-url", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesV3FilesFileIDSignedURLGetSignedURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SignedURL])
                res.signed_url = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_v3_files_file_id_get_by_id(self, request: operations.GetFilesV3FilesFileIDGetByIDRequest) -> operations.GetFilesV3FilesFileIDGetByIDResponse:
        r"""Get file.
        Get file by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/files/{fileId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesV3FilesFileIDGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_files_v3_files_file_id_update_properties(self, request: operations.PatchFilesV3FilesFileIDUpdatePropertiesRequest) -> operations.PatchFilesV3FilesFileIDUpdatePropertiesResponse:
        r"""update file properties
        Update properties of file by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/files/{fileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchFilesV3FilesFileIDUpdatePropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_files_v3_files_import_from_url_async_import_from_url(self, request: operations.PostFilesV3FilesImportFromURLAsyncImportFromURLRequest) -> operations.PostFilesV3FilesImportFromURLAsyncImportFromURLResponse:
        r"""Import a file from a URL into the file manager.
        Asynchronously imports the file at the given URL into the file manager.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/v3/files/import-from-url/async"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFilesV3FilesImportFromURLAsyncImportFromURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImportFromURLTaskLocator])
                res.import_from_url_task_locator = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_files_v3_files_upload(self, request: operations.PostFilesV3FilesUploadRequest) -> operations.PostFilesV3FilesUploadResponse:
        r"""Upload file
        Upload a single file with content specified in request body.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/v3/files"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFilesV3FilesUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def put_files_v3_files_file_id_replace(self, request: operations.PutFilesV3FilesFileIDReplaceRequest) -> operations.PutFilesV3FilesFileIDReplaceResponse:
        r"""Replace file.
        Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/v3/files/{fileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutFilesV3FilesFileIDReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    