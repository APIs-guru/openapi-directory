import warnings
import requests
from typing import Any,Enum,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://datacatalog.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def datacatalog_catalog_search(self, request: operations.DatacatalogCatalogSearchRequest) -> operations.DatacatalogCatalogSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1beta1/catalog:search"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogCatalogSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1SearchCatalogResponse])
                res.google_cloud_datacatalog_v1beta1_search_catalog_response = out

        return res

    
    
    def datacatalog_entries_lookup(self, request: operations.DatacatalogEntriesLookupRequest) -> operations.DatacatalogEntriesLookupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1beta1/entries:lookup"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogEntriesLookupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1Entry])
                res.google_cloud_datacatalog_v1beta1_entry = out

        return res

    
    
    def datacatalog_projects_locations_entry_groups_create(self, request: operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/entryGroups", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1EntryGroup])
                res.google_cloud_datacatalog_v1beta1_entry_group = out

        return res

    
    
    def datacatalog_projects_locations_entry_groups_entries_create(self, request: operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/entries", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1Entry])
                res.google_cloud_datacatalog_v1beta1_entry = out

        return res

    
    
    def datacatalog_projects_locations_entry_groups_entries_list(self, request: operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/entries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ListEntriesResponse])
                res.google_cloud_datacatalog_v1beta1_list_entries_response = out

        return res

    
    
    def datacatalog_projects_locations_entry_groups_list(self, request: operations.DatacatalogProjectsLocationsEntryGroupsListRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/entryGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse])
                res.google_cloud_datacatalog_v1beta1_list_entry_groups_response = out

        return res

    
    
    def datacatalog_projects_locations_entry_groups_tags_create(self, request: operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/tags", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1Tag])
                res.google_cloud_datacatalog_v1beta1_tag = out

        return res

    
    
    def datacatalog_projects_locations_entry_groups_tags_list(self, request: operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ListTagsResponse])
                res.google_cloud_datacatalog_v1beta1_list_tags_response = out

        return res

    
    
    def datacatalog_projects_locations_tag_templates_create(self, request: operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest) -> operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/tagTemplates", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1TagTemplate])
                res.google_cloud_datacatalog_v1beta1_tag_template = out

        return res

    
    
    def datacatalog_projects_locations_tag_templates_fields_create(self, request: operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest) -> operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fields", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1TagTemplateField])
                res.google_cloud_datacatalog_v1beta1_tag_template_field = out

        return res

    
    
    def datacatalog_projects_locations_tag_templates_fields_enum_values_rename(self, request: operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest) -> operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:rename", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1TagTemplateField])
                res.google_cloud_datacatalog_v1beta1_tag_template_field = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_create(self, request: operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/taxonomies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1Taxonomy])
                res.google_cloud_datacatalog_v1beta1_taxonomy = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_export(self, request: operations.DatacatalogProjectsLocationsTaxonomiesExportRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesExportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/taxonomies:export", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesExportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse])
                res.google_cloud_datacatalog_v1beta1_export_taxonomies_response = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_import(self, request: operations.DatacatalogProjectsLocationsTaxonomiesImportRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/taxonomies:import", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesImportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse])
                res.google_cloud_datacatalog_v1beta1_import_taxonomies_response = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_list(self, request: operations.DatacatalogProjectsLocationsTaxonomiesListRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/taxonomies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse])
                res.google_cloud_datacatalog_v1beta1_list_taxonomies_response = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_policy_tags_create(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/policyTags", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1PolicyTag])
                res.google_cloud_datacatalog_v1beta1_policy_tag = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_policy_tags_delete(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_policy_tags_get(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1PolicyTag])
                res.google_cloud_datacatalog_v1beta1_policy_tag = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_policy_tags_get_iam_policy(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{resource}:getIamPolicy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_policy_tags_list(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/policyTags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse])
                res.google_cloud_datacatalog_v1beta1_list_policy_tags_response = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_policy_tags_patch(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1beta1PolicyTag])
                res.google_cloud_datacatalog_v1beta1_policy_tag = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_policy_tags_set_iam_policy(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{resource}:setIamPolicy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    
    def datacatalog_projects_locations_taxonomies_policy_tags_test_iam_permissions(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{resource}:testIamPermissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    