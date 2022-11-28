# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DatacatalogCatalogSearchRequest{
        Security: operations.DatacatalogCatalogSearchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DatacatalogCatalogSearchQueryParams{
            DollarXgafv: "1",
            AccessToken: "eum",
            Alt: "proto",
            Callback: "est",
            Fields: "in",
            Key: "quisquam",
            OauthToken: "vitae",
            PrettyPrint: false,
            QuotaUser: "quia",
            UploadType: "sed",
            UploadProtocol: "voluptatem",
        },
        Request: &shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequest{
            OrderBy: "sit",
            PageSize: 8220186604699685187,
            PageToken: "earum",
            Query: "animi",
            Scope: &shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope{
                IncludeGcpPublicDatasets: true,
                IncludeOrgIds: []string{
                    "et",
                },
                IncludeProjectIds: []string{
                    "non",
                    "consequatur",
                    "cumque",
                },
                RestrictedLocations: []string{
                    "et",
                },
            },
        },
    }
    
    res, err := s.Catalog.DatacatalogCatalogSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1SearchCatalogResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### catalog

* `DatacatalogCatalogSearch` - Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

### entries

* `DatacatalogEntriesLookup` - Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

### projects

* `DatacatalogProjectsLocationsEntryGroupsCreate` - A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* `DatacatalogProjectsLocationsEntryGroupsEntriesCreate` - Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
* `DatacatalogProjectsLocationsEntryGroupsEntriesList` - Lists entries.
* `DatacatalogProjectsLocationsEntryGroupsList` - Lists entry groups.
* `DatacatalogProjectsLocationsEntryGroupsTagsCreate` - Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
* `DatacatalogProjectsLocationsEntryGroupsTagsList` - Lists tags assigned to an Entry. The columns in the response are lowercased.
* `DatacatalogProjectsLocationsTagTemplatesCreate` - Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* `DatacatalogProjectsLocationsTagTemplatesFieldsCreate` - Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* `DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename` - Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
* `DatacatalogProjectsLocationsTaxonomiesCreate` - Creates a taxonomy in the specified project.
* `DatacatalogProjectsLocationsTaxonomiesExport` - Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
* `DatacatalogProjectsLocationsTaxonomiesImport` - Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
* `DatacatalogProjectsLocationsTaxonomiesList` - Lists all taxonomies in a project in a particular location that the caller has permission to view.
* `DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreate` - Creates a policy tag in the specified taxonomy.
* `DatacatalogProjectsLocationsTaxonomiesPolicyTagsDelete` - Deletes a policy tag. Also deletes all of its descendant policy tags.
* `DatacatalogProjectsLocationsTaxonomiesPolicyTagsGet` - Gets a policy tag.
* `DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy` - Gets the IAM policy for a taxonomy or a policy tag.
* `DatacatalogProjectsLocationsTaxonomiesPolicyTagsList` - Lists all policy tags in a taxonomy.
* `DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatch` - Updates a policy tag.
* `DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy` - Sets the IAM policy for a taxonomy or a policy tag.
* `DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions` - Returns the permissions that a caller has on the specified taxonomy or policy tag.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
