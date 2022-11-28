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
    
    req := operations.UsersAddonAccountsListRequest{
        PathParams: operations.UsersAddonAccountsListPathParams{
            Provider: "ut",
            UserID: "quas",
        },
    }
    
    res, err := s.Sdk.UsersAddonAccountsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `UsersAddonAccountsList` - List all addon accounts
* `UsersAddonAccountsRead` - Retrieve an addon account
* `AddonsList` - List all addons
* `BaseRead` - Root
* `CitationsStylesList` - List all citation styles
* `CitationsStylesRead` - Retrieve a citation style
* `CollectionsAddMetadata` - Add Metadata or Subjects to a Entitiy in a Collection
* `CollectionsCollectedMetadata` - Retrieve subject data for a specific piece of metadata info for a collection
* `CollectionsCreate` - Create a Collection
* `CollectionsDelete` - Delete a Collection
* `CollectionsDetail` - Retrieve a Collection
* `CollectionsLinkedNodesList` - List All Linked Nodes for a Collection
* `CollectionsLinkedNodesRelationships` - Link Nodes to Collection
* `CollectionsLinkedNodesRelationshipsCreate` - Give a Sparse List of Node Ids
* `CollectionsLinkedNodesRelationshipsDelete` - Remove Nodes From Collection
* `CollectionsLinkedPreprintsList` - List All Linked Preprints for a Collection
* `CollectionsLinkedRegistrationsList` - List All Linked Registrations for a Collection
* `CollectionsLinkedRegistrationsRelationships` - Link Registrations to Collection
* `CollectionsLinkedRegistrationsRelationshipsCreate` - Give a Sparse List of Registrations Ids
* `CollectionsLinkedRegistrationsRelationshipsDelete` - Remove Registrations From Collection
* `CollectionsList` - List all Collections
* `CollectionsMetadataDelete` - Delete Collection Metadata from entitiy
* `CollectionsMetadataDetail` - Add Metadata or Subjects to an Entity in a Collection
* `CollectionsMetadataRegistrationsDetail` - Retrieve Specific Metadata for a Collection
* `CollectionsMetadataRegistrationsList` - Retrieve a list of collected metadata for a collection
* `CollectionsMetadataSubjectsRelationships` - Retrieve subject metadata for a specific piece of metadata in a collection
* `CollectionsMetadataSubjectsRelationshipsUpdate` - Update subjects for a specific piece of metadata in a collection
* `CommentsDelete` - Delete a comment
* `CommentsPut` - Update a comment
* `CommentsRead` - Retrieve a comment
* `FilesDetail` - Retrieve a file
* `FilesPatch` - Update a file
* `FilesVersionDetail` - Retrieve a file version
* `FilesVersions` - List all file versions
* `InstitutionsDetail` - Retrieve an institution
* `InstitutionsList` - List all institutions
* `InstitutionsNodeList` - List all affiliated nodes
* `InstitutionsRegistrationList` - List all affiliated registrations
* `InstitutionsUsersList` - List all affiliated users
* `LicenseList` - List all licenses
* `LicensesRead` - Retrieve a license
* `LogsActions` - Actions
* `LogsRead` - Retrieve a log
* `MetaschemasList` - List all metaschemas
* `MetaschemasRead` - Retrieve a metaschema
* `NodesAddonRead` - Retrieve an addon
* `NodesAddonsFoldersList` - List all addon folders
* `NodesAddonsList` - List all addons
* `NodesChildrenCreate` - Create a child node
* `NodesChildrenList` - List all child nodes
* `NodesCitationList` - Retrieve citation details
* `NodesCitationRead` - Retrieve a styled citation
* `NodesCommentCreate` - Create a comment
* `NodesCommentsList` - List all comments
* `NodesContributorsCreate` - Create a contributor
* `NodesContributorsDelete` - Delete a contributor
* `NodesContributorsList` - List all contributors
* `NodesContributorsPartialUpdate` - Update a contributor
* `NodesContributorsRead` - Retrieve a contributor
* `NodesCreate` - Create a node
* `NodesDelete` - Delete a node
* `NodesDraftRegistrationsCreate` - Create a draft registration
* `NodesDraftRegistrationsDelete` - Delete a draft registration
* `NodesDraftRegistrationsList` - List all draft registrations
* `NodesDraftRegistrationsPartialUpdate` - Update a draft registration
* `NodesDraftRegistrationsRead` - Retrieve a draft registration
* `NodesFilesList` - List all node files
* `NodesFilesRead` - Retrieve a file
* `NodesForksCreate` - Create a fork of this node
* `NodesForksList` - List all forks of this node
* `NodesIdentifiersList` - List all identifiers
* `NodesInstitutionsList` - List all institutions
* `NodesLinkedNodesList` - List all linked nodes
* `NodesList` - List all nodes
* `NodesLogsList` - List all logs
* `NodesNodeAddonUpdate` - Update an addon
* `NodesPartialUpdate` - Update a node
* `NodesPreprintsList` - List all preprints
* `NodesProvidersList` - List all storage providers
* `NodesProvidersRead` - Retrieve a storage provider
* `NodesRead` - Retrieve a node
* `NodesRegistrationsList` - List all registrations
* `NodesViewOnlyLinksList` - List all view only links
* `NodesViewOnlyLinksRead` - Retrieve a view only link
* `NodesWikisList` - List all wikis
* `PreprintProviderDetail` - Retrieve a preprint provider
* `PreprintProviderLicensesList` - List all licenses
* `PreprintProviderList` - List all preprint providers
* `PreprintProviderTaxonomiesList` - List all taxonomies
* `PreprintProvidersPreprintsList` - List all preprints
* `PreprintsCitationList` - Retrieve citation details
* `PreprintsCitationRead` - Retrieve a styled citation
* `PreprintsCreate` - Create a preprint
* `PreprintsList` - List all preprints
* `PreprintsPartialUpdate` - Update a preprint
* `PreprintsRead` - Retrieve a preprint
* `RegistrationsChildrenList` - List all child registrations
* `RegistrationsCitationRead` - Retrieve a citation
* `RegistrationsCitationsList` - List all citation styles
* `RegistrationsCommentsList` - List all comments
* `RegistrationsContributorsList` - List all contributors
* `RegistrationsContributorsRead` - Retrieve a contributor
* `RegistrationsFilesList` - List all files
* `RegistrationsFilesRead` - Retrieve a file
* `RegistrationsForksCreate` - Create a fork
* `RegistrationsForksList` - List all forks
* `RegistrationsIdentifiersList` - List all identifiers
* `RegistrationsInstitutionsList` - List all institutions
* `RegistrationsLinkedNodesList` - List all linked nodes
* `RegistrationsList` - List all registrations
* `RegistrationsLogsList` - List all logs
* `RegistrationsPartialUpdate` - Update a registration
* `RegistrationsProvidersList` - List all storage providers
* `RegistrationsRead` - Retrieve a registration
* `RegistrationsViewOnlyLinksList` - List all view only links
* `RegistrationsViewOnlyLinksRead` - Retrieve a view only link
* `RegistrationsWikisList` - List all wikis
* `TaxonomiesList` - List all taxonomies
* `TaxonomiesRead` - Retrieve a taxonomy
* `UsersAddonsList` - List all user addons
* `UsersAddonsRead` - Retrieve a user addon
* `UsersInstitutionsList` - List all institutions
* `UsersList` - List all users
* `UsersNodesList` - List all nodes
* `UsersPartialUpdate` - Update a user
* `UsersPreprintsList` - List all preprints
* `UsersRead` - Retrieve a user
* `UsersRegistrationsList` - List all registrations
* `ViewOnlyLinksNodeList` - List all nodes
* `ViewOnlyLinksRead` - Retrieve a view only link
* `WikiContent` - Retrieve the Content of a Wiki
* `WikiRead` - Retrieve a Wiki

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
