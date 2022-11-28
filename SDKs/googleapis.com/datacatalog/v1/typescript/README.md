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
    dollarXgafv: "2",
    accessToken: "ut",
    alt: "media",
    callback: "quos",
    fields: "exercitationem",
    key: "aliquam",
    oauthToken: "enim",
    prettyPrint: true,
    quotaUser: "atque",
    uploadType: "ab",
    uploadProtocol: "architecto",
  },
  request: {
    orderBy: "aut",
    pageSize: 2744108982111254114,
    pageToken: "sed",
    query: "eum",
    scope: {
      includeGcpPublicDatasets: true,
      includeOrgIds: [
        "aut",
        "ipsam",
      ],
      includeProjectIds: [
        "consequuntur",
      ],
      includePublicTagTemplates: false,
      restrictedLocations: [
        "pariatur",
        "sed",
        "non",
      ],
      starredOnly: false,
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

* `datacatalogCatalogSearch` - Searches Data Catalog for multiple resources like entries and tags that match a query. This is a [Custom Method] (https://cloud.google.com/apis/design/custom_methods) that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods. Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. For more information, see [Data Catalog search syntax] (https://cloud.google.com/data-catalog/docs/how-to/search-reference).

### entries

* `datacatalogEntriesLookup` - Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

### projects

* `datacatalogProjectsLocationsEntryGroupsCreate` - Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* `datacatalogProjectsLocationsEntryGroupsEntriesCreate` - Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.
* `datacatalogProjectsLocationsEntryGroupsEntriesList` - Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.
* `datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts` - Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.
* `datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview` - Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.
* `datacatalogProjectsLocationsEntryGroupsEntriesStar` - Marks an Entry as starred by the current user. Starring information is private to each user.
* `datacatalogProjectsLocationsEntryGroupsEntriesUnstar` - Marks an Entry as NOT starred by the current user. Starring information is private to each user.
* `datacatalogProjectsLocationsEntryGroupsList` - Lists entry groups.
* `datacatalogProjectsLocationsEntryGroupsTagsCreate` - Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.
* `datacatalogProjectsLocationsEntryGroupsTagsList` - Lists tags assigned to an Entry. The columns in the response are lowercased.
* `datacatalogProjectsLocationsTagTemplatesCreate` - Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* `datacatalogProjectsLocationsTagTemplatesFieldsCreate` - Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* `datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename` - Renames an enum value in a tag template. Within a single enum field, enum values must be unique.
* `datacatalogProjectsLocationsTaxonomiesCreate` - Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.
* `datacatalogProjectsLocationsTaxonomiesExport` - Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.
* `datacatalogProjectsLocationsTaxonomiesImport` - Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.
* `datacatalogProjectsLocationsTaxonomiesList` - Lists all taxonomies in a project in a particular location that you have a permission to view.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate` - Creates a policy tag in a taxonomy.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete` - Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsGet` - Gets a policy tag.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy` - Gets the IAM policy for a policy tag or a taxonomy.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsList` - Lists all policy tags in a taxonomy.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch` - Updates a policy tag, including its display name, description, and parent policy tag.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy` - Sets the IAM policy for a policy tag or a taxonomy.
* `datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions` - Returns your permissions on a specified policy tag or taxonomy.
* `datacatalogProjectsLocationsTaxonomiesReplace` - Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
