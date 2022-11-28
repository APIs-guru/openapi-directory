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
        r"""Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/entryGroups", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1EntryGroup])
                res.google_cloud_datacatalog_v1_entry_group = out

        return res

    
    def datacatalog_projects_locations_entry_groups_entries_create(self, request: operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse:
        r"""Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/entries", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1Entry])
                res.google_cloud_datacatalog_v1_entry = out

        return res

    
    def datacatalog_projects_locations_entry_groups_entries_list(self, request: operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse:
        r"""Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/entries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1ListEntriesResponse])
                res.google_cloud_datacatalog_v1_list_entries_response = out

        return res

    
    def datacatalog_projects_locations_entry_groups_entries_modify_entry_contacts(self, request: operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse:
        r"""Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:modifyEntryContacts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1Contacts])
                res.google_cloud_datacatalog_v1_contacts = out

        return res

    
    def datacatalog_projects_locations_entry_groups_entries_modify_entry_overview(self, request: operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewResponse:
        r"""Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:modifyEntryOverview", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1EntryOverview])
                res.google_cloud_datacatalog_v1_entry_overview = out

        return res

    
    def datacatalog_projects_locations_entry_groups_entries_star(self, request: operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse:
        r"""Marks an Entry as starred by the current user. Starring information is private to each user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:star", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_datacatalog_v1_star_entry_response = out

        return res

    
    def datacatalog_projects_locations_entry_groups_entries_unstar(self, request: operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarResponse:
        r"""Marks an Entry as NOT starred by the current user. Starring information is private to each user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:unstar", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_datacatalog_v1_unstar_entry_response = out

        return res

    
    def datacatalog_projects_locations_entry_groups_list(self, request: operations.DatacatalogProjectsLocationsEntryGroupsListRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsListResponse:
        r"""Lists entry groups.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/entryGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1ListEntryGroupsResponse])
                res.google_cloud_datacatalog_v1_list_entry_groups_response = out

        return res

    
    def datacatalog_projects_locations_entry_groups_tags_create(self, request: operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse:
        r"""Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/tags", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1Tag])
                res.google_cloud_datacatalog_v1_tag = out

        return res

    
    def datacatalog_projects_locations_entry_groups_tags_list(self, request: operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest) -> operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse:
        r"""Lists tags assigned to an Entry. The columns in the response are lowercased.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1ListTagsResponse])
                res.google_cloud_datacatalog_v1_list_tags_response = out

        return res

    
    def datacatalog_projects_locations_tag_templates_create(self, request: operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest) -> operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse:
        r"""Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/tagTemplates", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1TagTemplate])
                res.google_cloud_datacatalog_v1_tag_template = out

        return res

    
    def datacatalog_projects_locations_tag_templates_fields_create(self, request: operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest) -> operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse:
        r"""Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/fields", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1TagTemplateField])
                res.google_cloud_datacatalog_v1_tag_template_field = out

        return res

    
    def datacatalog_projects_locations_tag_templates_fields_enum_values_rename(self, request: operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest) -> operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse:
        r"""Renames an enum value in a tag template. Within a single enum field, enum values must be unique.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:rename", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1TagTemplateField])
                res.google_cloud_datacatalog_v1_tag_template_field = out

        return res

    
    def datacatalog_projects_locations_taxonomies_create(self, request: operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse:
        r"""Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/taxonomies", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1Taxonomy])
                res.google_cloud_datacatalog_v1_taxonomy = out

        return res

    
    def datacatalog_projects_locations_taxonomies_export(self, request: operations.DatacatalogProjectsLocationsTaxonomiesExportRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesExportResponse:
        r"""Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/taxonomies:export", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1ExportTaxonomiesResponse])
                res.google_cloud_datacatalog_v1_export_taxonomies_response = out

        return res

    
    def datacatalog_projects_locations_taxonomies_import(self, request: operations.DatacatalogProjectsLocationsTaxonomiesImportRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesImportResponse:
        r"""Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/taxonomies:import", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1ImportTaxonomiesResponse])
                res.google_cloud_datacatalog_v1_import_taxonomies_response = out

        return res

    
    def datacatalog_projects_locations_taxonomies_list(self, request: operations.DatacatalogProjectsLocationsTaxonomiesListRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesListResponse:
        r"""Lists all taxonomies in a project in a particular location that you have a permission to view.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/taxonomies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1ListTaxonomiesResponse])
                res.google_cloud_datacatalog_v1_list_taxonomies_response = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_create(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse:
        r"""Creates a policy tag in a taxonomy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/policyTags", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1PolicyTag])
                res.google_cloud_datacatalog_v1_policy_tag = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_delete(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse:
        r"""Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1PolicyTag])
                res.google_cloud_datacatalog_v1_policy_tag = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_get_iam_policy(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse:
        r"""Gets the IAM policy for a policy tag or a taxonomy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1/{parent}/policyTags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1ListPolicyTagsResponse])
                res.google_cloud_datacatalog_v1_list_policy_tags_response = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_patch(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse:
        r"""Updates a policy tag, including its display name, description, and parent policy tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1PolicyTag])
                res.google_cloud_datacatalog_v1_policy_tag = out

        return res

    
    def datacatalog_projects_locations_taxonomies_policy_tags_set_iam_policy(self, request: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse:
        r"""Sets the IAM policy for a policy tag or a taxonomy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:setIamPolicy", request.path_params)
        
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
        r"""Returns your permissions on a specified policy tag or taxonomy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:testIamPermissions", request.path_params)
        
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

    
    def datacatalog_projects_locations_taxonomies_replace(self, request: operations.DatacatalogProjectsLocationsTaxonomiesReplaceRequest) -> operations.DatacatalogProjectsLocationsTaxonomiesReplaceResponse:
        r"""Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:replace", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatacatalogProjectsLocationsTaxonomiesReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatacatalogV1Taxonomy])
                res.google_cloud_datacatalog_v1_taxonomy = out

        return res

    