import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def firestore_projects_databases_collection_groups_fields_list(self, request: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest) -> operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse:
        r"""Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{parent}/fields", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirestoreAdminV1beta2ListFieldsResponse])
                res.google_firestore_admin_v1beta2_list_fields_response = out

        return res

    
    def firestore_projects_databases_collection_groups_fields_patch(self, request: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest) -> operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse:
        r"""Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: \"index_config\" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def firestore_projects_databases_collection_groups_indexes_create(self, request: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest) -> operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse:
        r"""Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{parent}/indexes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def firestore_projects_databases_collection_groups_indexes_delete(self, request: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteRequest) -> operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteResponse:
        r"""Deletes a composite index.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def firestore_projects_databases_collection_groups_indexes_get(self, request: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest) -> operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse:
        r"""Gets a composite index.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirestoreAdminV1beta2Index])
                res.google_firestore_admin_v1beta2_index = out

        return res

    
    def firestore_projects_databases_collection_groups_indexes_list(self, request: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest) -> operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse:
        r"""Lists composite indexes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{parent}/indexes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirestoreAdminV1beta2ListIndexesResponse])
                res.google_firestore_admin_v1beta2_list_indexes_response = out

        return res

    
    def firestore_projects_databases_export_documents(self, request: operations.FirestoreProjectsDatabasesExportDocumentsRequest) -> operations.FirestoreProjectsDatabasesExportDocumentsResponse:
        r"""Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{name}:exportDocuments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirestoreProjectsDatabasesExportDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def firestore_projects_databases_import_documents(self, request: operations.FirestoreProjectsDatabasesImportDocumentsRequest) -> operations.FirestoreProjectsDatabasesImportDocumentsResponse:
        r"""Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{name}:importDocuments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirestoreProjectsDatabasesImportDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    