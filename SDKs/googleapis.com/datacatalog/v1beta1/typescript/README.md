# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DatacatalogCatalogSearchRequest, DatacatalogCatalogSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DatacatalogCatalogSearchRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "eum",
    alt: "proto",
    callback: "est",
    fields: "in",
    key: "quisquam",
    oauthToken: "vitae",
    prettyPrint: false,
    quotaUser: "quia",
    uploadType: "sed",
    uploadProtocol: "voluptatem",
  },
  request: {
    orderBy: "sit",
    pageSize: 8220186604699685187,
    pageToken: "earum",
    query: "animi",
    scope: {
      includeGcpPublicDatasets: true,
      includeOrgIds: [
        "et",
      ],
      includeProjectIds: [
        "non",
        "consequatur",
        "cumque",
      ],
      restrictedLocations: [
        "et",
      ],
    },
  },
};

sdk.catalog.datacatalogCatalogSearch(req).then((res: DatacatalogCatalogSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### catalog

* `datacatalogCatalogSearch` - Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

### entries

* `datacatalogEntriesLookup` - Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

### projects

* `datacatalogProjectsLocationsEntryGroupsCreate` - A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* `datacatalogProjectsLocationsEntryGroupsEntriesCreate` - Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
* `datacatalogProjectsLocationsEntryGroupsEntriesList` - Lists entries.
* `datacatalogProjectsLocationsEntryGroupsList` - Lists entry groups.
* `datacatalogProjectsLocationsEntryGroupsTagsCreate` - Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
* `datacatalogProjectsLocationsEntryGroupsTagsList` - Lists tags assigned to an Entry. The columns in the response are lowercased.
* `datacatalogProjectsLocationsTagTemplatesCreate` - Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* `datacatalogProjectsLocationsTagTemplatesFieldsCreate` - Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* `datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename` - Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
* `datacatalogProjectsLocationsTaxonomiesCreate` - Creates a taxonomy in the specified project.
* `datacatalogProjectsLocationsTaxonomiesExport` - Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
* `datacatalogProjectsLocationsTaxonomiesImport` - Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
* `datacatalogProjectsLocationsTaxonomiesList` - Lists all taxonomies in a project in a particular location that the caller has permission to view.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate` - Creates a policy tag in the specified taxonomy.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete` - Deletes a policy tag. Also deletes all of its descendant policy tags.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsGet` - Gets a policy tag.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy` - Gets the IAM policy for a taxonomy or a policy tag.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsList` - Lists all policy tags in a taxonomy.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch` - Updates a policy tag.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy` - Sets the IAM policy for a taxonomy or a policy tag.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions` - Returns the permissions that a caller has on the specified taxonomy or policy tag.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
