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
import { UsersAddonAccountsListRequest, UsersAddonAccountsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: UsersAddonAccountsListRequest = {
  pathParams: {
    provider: "ut",
    userId: "quas",
  },
};

sdk.sdk.usersAddonAccountsList(req).then((res: UsersAddonAccountsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `usersAddonAccountsList` - List all addon accounts
* `usersAddonAccountsRead` - Retrieve an addon account
* `addonsList` - List all addons
* `baseRead` - Root
* `citationsStylesList` - List all citation styles
* `citationsStylesRead` - Retrieve a citation style
* `collectionsAddMetadata` - Add Metadata or Subjects to a Entitiy in a Collection
* `collectionsCollectedMetadata` - Retrieve subject data for a specific piece of metadata info for a collection
* `collectionsCreate` - Create a Collection
* `collectionsDelete` - Delete a Collection
* `collectionsDetail` - Retrieve a Collection
* `collectionsLinkedNodesList` - List All Linked Nodes for a Collection
* `collectionsLinkedNodesRelationships` - Link Nodes to Collection
* `collectionsLinkedNodesRelationshipsCreate` - Give a Sparse List of Node Ids
* `collectionsLinkedNodesRelationshipsDelete` - Remove Nodes From Collection
* `collectionsLinkedPreprintsList` - List All Linked Preprints for a Collection
* `collectionsLinkedRegistrationsList` - List All Linked Registrations for a Collection
* `collectionsLinkedRegistrationsRelationships` - Link Registrations to Collection
* `collectionsLinkedRegistrationsRelationshipsCreate` - Give a Sparse List of Registrations Ids
* `collectionsLinkedRegistrationsRelationshipsDelete` - Remove Registrations From Collection
* `collectionsList` - List all Collections
* `collectionsMetadataDelete` - Delete Collection Metadata from entitiy
* `collectionsMetadataDetail` - Add Metadata or Subjects to an Entity in a Collection
* `collectionsMetadataRegistrationsDetail` - Retrieve Specific Metadata for a Collection
* `collectionsMetadataRegistrationsList` - Retrieve a list of collected metadata for a collection
* `collectionsMetadataSubjectsRelationships` - Retrieve subject metadata for a specific piece of metadata in a collection
* `collectionsMetadataSubjectsRelationshipsUpdate` - Update subjects for a specific piece of metadata in a collection
* `commentsDelete` - Delete a comment
* `commentsPut` - Update a comment
* `commentsRead` - Retrieve a comment
* `filesDetail` - Retrieve a file
* `filesPatch` - Update a file
* `filesVersionDetail` - Retrieve a file version
* `filesVersions` - List all file versions
* `institutionsDetail` - Retrieve an institution
* `institutionsList` - List all institutions
* `institutionsNodeList` - List all affiliated nodes
* `institutionsRegistrationList` - List all affiliated registrations
* `institutionsUsersList` - List all affiliated users
* `licenseList` - List all licenses
* `licensesRead` - Retrieve a license
* `logsActions` - Actions
* `logsRead` - Retrieve a log
* `metaschemasList` - List all metaschemas
* `metaschemasRead` - Retrieve a metaschema
* `nodesAddonRead` - Retrieve an addon
* `nodesAddonsFoldersList` - List all addon folders
* `nodesAddonsList` - List all addons
* `nodesChildrenCreate` - Create a child node
* `nodesChildrenList` - List all child nodes
* `nodesCitationList` - Retrieve citation details
* `nodesCitationRead` - Retrieve a styled citation
* `nodesCommentCreate` - Create a comment
* `nodesCommentsList` - List all comments
* `nodesContributorsCreate` - Create a contributor
* `nodesContributorsDelete` - Delete a contributor
* `nodesContributorsList` - List all contributors
* `nodesContributorsPartialUpdate` - Update a contributor
* `nodesContributorsRead` - Retrieve a contributor
* `nodesCreate` - Create a node
* `nodesDelete` - Delete a node
* `nodesDraftRegistrationsCreate` - Create a draft registration
* `nodesDraftRegistrationsDelete` - Delete a draft registration
* `nodesDraftRegistrationsList` - List all draft registrations
* `nodesDraftRegistrationsPartialUpdate` - Update a draft registration
* `nodesDraftRegistrationsRead` - Retrieve a draft registration
* `nodesFilesList` - List all node files
* `nodesFilesRead` - Retrieve a file
* `nodesForksCreate` - Create a fork of this node
* `nodesForksList` - List all forks of this node
* `nodesIdentifiersList` - List all identifiers
* `nodesInstitutionsList` - List all institutions
* `nodesLinkedNodesList` - List all linked nodes
* `nodesList` - List all nodes
* `nodesLogsList` - List all logs
* `nodesNodeAddonUpdate` - Update an addon
* `nodesPartialUpdate` - Update a node
* `nodesPreprintsList` - List all preprints
* `nodesProvidersList` - List all storage providers
* `nodesProvidersRead` - Retrieve a storage provider
* `nodesRead` - Retrieve a node
* `nodesRegistrationsList` - List all registrations
* `nodesViewOnlyLinksList` - List all view only links
* `nodesViewOnlyLinksRead` - Retrieve a view only link
* `nodesWikisList` - List all wikis
* `preprintProviderDetail` - Retrieve a preprint provider
* `preprintProviderLicensesList` - List all licenses
* `preprintProviderList` - List all preprint providers
* `preprintProviderTaxonomiesList` - List all taxonomies
* `preprintProvidersPreprintsList` - List all preprints
* `preprintsCitationList` - Retrieve citation details
* `preprintsCitationRead` - Retrieve a styled citation
* `preprintsCreate` - Create a preprint
* `preprintsList` - List all preprints
* `preprintsPartialUpdate` - Update a preprint
* `preprintsRead` - Retrieve a preprint
* `registrationsChildrenList` - List all child registrations
* `registrationsCitationRead` - Retrieve a citation
* `registrationsCitationsList` - List all citation styles
* `registrationsCommentsList` - List all comments
* `registrationsContributorsList` - List all contributors
* `registrationsContributorsRead` - Retrieve a contributor
* `registrationsFilesList` - List all files
* `registrationsFilesRead` - Retrieve a file
* `registrationsForksCreate` - Create a fork
* `registrationsForksList` - List all forks
* `registrationsIdentifiersList` - List all identifiers
* `registrationsInstitutionsList` - List all institutions
* `registrationsLinkedNodesList` - List all linked nodes
* `registrationsList` - List all registrations
* `registrationsLogsList` - List all logs
* `registrationsPartialUpdate` - Update a registration
* `registrationsProvidersList` - List all storage providers
* `registrationsRead` - Retrieve a registration
* `registrationsViewOnlyLinksList` - List all view only links
* `registrationsViewOnlyLinksRead` - Retrieve a view only link
* `registrationsWikisList` - List all wikis
* `taxonomiesList` - List all taxonomies
* `taxonomiesRead` - Retrieve a taxonomy
* `usersAddonsList` - List all user addons
* `usersAddonsRead` - Retrieve a user addon
* `usersInstitutionsList` - List all institutions
* `usersList` - List all users
* `usersNodesList` - List all nodes
* `usersPartialUpdate` - Update a user
* `usersPreprintsList` - List all preprints
* `usersRead` - Retrieve a user
* `usersRegistrationsList` - List all registrations
* `viewOnlyLinksNodeList` - List all nodes
* `viewOnlyLinksRead` - Retrieve a view only link
* `wikiContent` - Retrieve the Content of a Wiki
* `wikiRead` - Retrieve a Wiki

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
