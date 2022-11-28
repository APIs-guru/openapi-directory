import requests
from typing import Any,Optional
from enum import Enum
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

    
    def datacatalog_projects_locations_entry_groups_create(self, request: operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse:
        r"""A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/entryGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1EntryGroup])
                res.google_cloud_datacatalog_v1beta1_entry_group = out

        return res

    
    def datacatalog_projects_locations_entry_groups_entries_create(self, request: operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse:
        r"""Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/entries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1Entry])
                res.google_cloud_datacatalog_v1beta1_entry = out

        return res

    
    def datacatalog_projects_locations_entry_groups_entries_list(self, request: operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse:
        r"""Lists entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/entries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ListEntriesResponse])
                res.google_cloud_datacatalog_v1beta1_list_entries_response = out

        return res

    
    def datacatalog_projects_locations_entry_groups_list(self, request: operations.DatacatalogProjectsLocationsEntryGroupsListRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsListResponse:
        r"""Lists entry groups.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/entryGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse])
                res.google_cloud_datacatalog_v1beta1_list_entry_groups_response = out

        return res

    
    def datacatalog_projects_locations_entry_groups_tags_create(self, request: operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse:
        r"""Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1Tag])
                res.google_cloud_datacatalog_v1beta1_tag = out

        return res

    
    def datacatalog_projects_locations_entry_groups_tags_list(self, request: operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse:
        r"""Lists tags assigned to an Entry. The columns in the response are lowercased.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ListTagsResponse])
                res.google_cloud_datacatalog_v1beta1_list_tags_response = out

        return res

    
    def datacatalog_projects_locations_tag_templates_create(self, request: operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest) -> operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse:
        r"""Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/tagTemplates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1TagTemplate])
                res.google_cloud_datacatalog_v1beta1_tag_template = out

        return res

    
    def datacatalog_projects_locations_tag_templates_fields_create(self, request: operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest) -> operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse:
        r"""Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fields", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1TagTemplateField])
                res.google_cloud_datacatalog_v1beta1_tag_template_field = out

        return res

    
    def datacatalog_projects_locations_tag_templates_fields_enum_values_rename(self, request: operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest) -> operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse:
        r"""Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:rename", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1TagTemplateField])
                res.google_cloud_datacatalog_v1beta1_tag_template_field = out

        return res

    
    def datacatalog_projects_locations_taxonomies_create(self, request: operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse:
        r"""Creates a taxonomy in the specified project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/taxonomies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1Taxonomy])
                res.google_cloud_datacatalog_v1beta1_taxonomy = out

        return res

    
    def datacatalog_projects_locations_taxonomies_export(self, request: operations.DatacatalogProjectsLocationsTaxonomiesExportRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesExportResponse:
        r"""Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/taxonomies:export", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse])
                res.google_cloud_datacatalog_v1beta1_export_taxonomies_response = out

        return res

    
    def datacatalog_projects_locations_taxonomies_import(self, request: operations.DatacatalogProjectsLocationsTaxonomiesImportRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesImportResponse:
        r"""Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/taxonomies:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse])
                res.google_cloud_datacatalog_v1beta1_import_taxonomies_response = out

        return res

    
    def datacatalog_projects_locations_taxonomies_list(self, request: operations.DatacatalogProjectsLocationsTaxonomiesListRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesListResponse:
        r"""Lists all taxonomies in a project in a particular location that the caller has permission to view.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/taxonomies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse])
                res.google_cloud_datacatalog_v1beta1_list_taxonomies_response = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_create(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse:
        r"""Creates a policy tag in the specified taxonomy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/policyTags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1PolicyTag])
                res.google_cloud_datacatalog_v1beta1_policy_tag = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_delete(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse:
        r"""Deletes a policy tag. Also deletes all of its descendant policy tags.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_get(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse:
        r"""Gets a policy tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1PolicyTag])
                res.google_cloud_datacatalog_v1beta1_policy_tag = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_get_iam_policy(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse:
        r"""Gets the IAM policy for a taxonomy or a policy tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:getIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_list(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse:
        r"""Lists all policy tags in a taxonomy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/policyTags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse])
                res.google_cloud_datacatalog_v1beta1_list_policy_tags_response = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_patch(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse:
        r"""Updates a policy tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1PolicyTag])
                res.google_cloud_datacatalog_v1beta1_policy_tag = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_set_iam_policy(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse:
        r"""Sets the IAM policy for a taxonomy or a policy tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_test_iam_permissions(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse:
        r"""Returns the permissions that a caller has on the specified taxonomy or policy tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    