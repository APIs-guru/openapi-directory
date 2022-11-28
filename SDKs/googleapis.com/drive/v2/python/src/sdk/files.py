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

    
    def drive_files_copy(self, request: operations.DriveFilesCopyRequest) -> operations.DriveFilesCopyResponse:
        r"""Creates a copy of the specified file. Folders cannot be copied.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/copy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesCopyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def drive_files_delete(self, request: operations.DriveFilesDeleteRequest) -> operations.DriveFilesDeleteResponse:
        r"""Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def drive_files_empty_trash(self, request: operations.DriveFilesEmptyTrashRequest) -> operations.DriveFilesEmptyTrashResponse:
        r"""Permanently deletes all of the user's trashed files.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/trash"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesEmptyTrashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def drive_files_export(self, request: operations.DriveFilesExportRequest) -> operations.DriveFilesExportResponse:
        r"""Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/export", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def drive_files_generate_ids(self, request: operations.DriveFilesGenerateIdsRequest) -> operations.DriveFilesGenerateIdsResponse:
        r"""Generates a set of file IDs which can be provided in insert or copy requests.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/generateIds"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesGenerateIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeneratedIds])
                res.generated_ids = out

        return res

    
    def drive_files_get(self, request: operations.DriveFilesGetRequest) -> operations.DriveFilesGetResponse:
        r"""Gets a file's metadata or content by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def drive_files_insert(self, request: operations.DriveFilesInsertRequest) -> operations.DriveFilesInsertResponse:
        r"""Insert a new file.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def drive_files_list(self, request: operations.DriveFilesListRequest) -> operations.DriveFilesListResponse:
        r"""Lists the user's files.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileList])
                res.file_list = out

        return res

    
    def drive_files_list_labels(self, request: operations.DriveFilesListLabelsRequest) -> operations.DriveFilesListLabelsResponse:
        r"""Lists the labels on a file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/listLabels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesListLabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LabelList])
                res.label_list = out

        return res

    
    def drive_files_modify_labels(self, request: operations.DriveFilesModifyLabelsRequest) -> operations.DriveFilesModifyLabelsResponse:
        r"""Modifies the set of labels on a file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/modifyLabels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesModifyLabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModifyLabelsResponse])
                res.modify_labels_response = out

        return res

    
    def drive_files_patch(self, request: operations.DriveFilesPatchRequest) -> operations.DriveFilesPatchResponse:
        r"""Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def drive_files_touch(self, request: operations.DriveFilesTouchRequest) -> operations.DriveFilesTouchResponse:
        r"""Set the file's updated time to the current server time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/touch", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesTouchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def drive_files_trash(self, request: operations.DriveFilesTrashRequest) -> operations.DriveFilesTrashResponse:
        r"""Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/trash", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesTrashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def drive_files_untrash(self, request: operations.DriveFilesUntrashRequest) -> operations.DriveFilesUntrashResponse:
        r"""Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/untrash", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesUntrashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def drive_files_update(self, request: operations.DriveFilesUpdateRequest) -> operations.DriveFilesUpdateResponse:
        r"""Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def drive_files_watch(self, request: operations.DriveFilesWatchRequest) -> operations.DriveFilesWatchResponse:
        r"""Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/watch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveFilesWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    