# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DatacatalogCatalogSearchRequest(
    security=operations.DatacatalogCatalogSearchSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.DatacatalogCatalogSearchQueryParams(
        dollar_xgafv="1",
        access_token="eum",
        alt="proto",
        callback="est",
        fields="in",
        key="quisquam",
        oauth_token="vitae",
        pretty_print=False,
        quota_user="quia",
        upload_type="sed",
        upload_protocol="voluptatem",
    ),
    request=shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequest(
        order_by="sit",
        page_size=8220186604699685187,
        page_token="earum",
        query="animi",
        scope=shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope(
            include_gcp_public_datasets=True,
            include_org_ids=[
                "et",
            ],
            include_project_ids=[
                "non",
                "consequatur",
                "cumque",
            ],
            restricted_locations=[
                "et",
            ],
        ),
    ),
)
    
res = s.catalog.datacatalog_catalog_search(req)

if res.google_cloud_datacatalog_v1beta1_search_catalog_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### catalog

* `datacatalog_catalog_search` - Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

### entries

* `datacatalog_entries_lookup` - Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

### projects

* `datacatalog_projects_locations_entry_groups_create` - A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* `datacatalog_projects_locations_entry_groups_entries_create` - Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
* `datacatalog_projects_locations_entry_groups_entries_list` - Lists entries.
* `datacatalog_projects_locations_entry_groups_list` - Lists entry groups.
* `datacatalog_projects_locations_entry_groups_tags_create` - Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
* `datacatalog_projects_locations_entry_groups_tags_list` - Lists tags assigned to an Entry. The columns in the response are lowercased.
* `datacatalog_projects_locations_tag_templates_create` - Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* `datacatalog_projects_locations_tag_templates_fields_create` - Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* `datacatalog_projects_locations_tag_templates_fields_enum_values_rename` - Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
* `datacatalog_projects_locations_taxonomies_create` - Creates a taxonomy in the specified project.
* `datacatalog_projects_locations_taxonomies_export` - Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
* `datacatalog_projects_locations_taxonomies_import` - Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
* `datacatalog_projects_locations_taxonomies_list` - Lists all taxonomies in a project in a particular location that the caller has permission to view.
* `datacatalog_projects_locations_taxonomies_policy_tags_create` - Creates a policy tag in the specified taxonomy.
* `datacatalog_projects_locations_taxonomies_policy_tags_delete` - Deletes a policy tag. Also deletes all of its descendant policy tags.
* `datacatalog_projects_locations_taxonomies_policy_tags_get` - Gets a policy tag.
* `datacatalog_projects_locations_taxonomies_policy_tags_get_iam_policy` - Gets the IAM policy for a taxonomy or a policy tag.
* `datacatalog_projects_locations_taxonomies_policy_tags_list` - Lists all policy tags in a taxonomy.
* `datacatalog_projects_locations_taxonomies_policy_tags_patch` - Updates a policy tag.
* `datacatalog_projects_locations_taxonomies_policy_tags_set_iam_policy` - Sets the IAM policy for a taxonomy or a policy tag.
* `datacatalog_projects_locations_taxonomies_policy_tags_test_iam_permissions` - Returns the permissions that a caller has on the specified taxonomy or policy tag.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
