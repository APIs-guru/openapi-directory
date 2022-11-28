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
    
req = operations.UsersAddonAccountsListRequest(
    path_params=operations.UsersAddonAccountsListPathParams(
        provider="ut",
        user_id="quas",
    ),
)
    
res = s.sdk.users_addon_accounts_list(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `users_addon_accounts_list` - List all addon accounts
* `users_addon_accounts_read` - Retrieve an addon account
* `addons_list` - List all addons
* `base_read` - Root
* `citations_styles_list` - List all citation styles
* `citations_styles_read` - Retrieve a citation style
* `collections_add_metadata` - Add Metadata or Subjects to a Entitiy in a Collection
* `collections_collected_metadata` - Retrieve subject data for a specific piece of metadata info for a collection
* `collections_create` - Create a Collection
* `collections_delete` - Delete a Collection
* `collections_detail` - Retrieve a Collection
* `collections_linked_nodes_list` - List All Linked Nodes for a Collection
* `collections_linked_nodes_relationships` - Link Nodes to Collection
* `collections_linked_nodes_relationships_create` - Give a Sparse List of Node Ids
* `collections_linked_nodes_relationships_delete` - Remove Nodes From Collection
* `collections_linked_preprints_list` - List All Linked Preprints for a Collection
* `collections_linked_registrations_list` - List All Linked Registrations for a Collection
* `collections_linked_registrations_relationships` - Link Registrations to Collection
* `collections_linked_registrations_relationships_create` - Give a Sparse List of Registrations Ids
* `collections_linked_registrations_relationships_delete` - Remove Registrations From Collection
* `collections_list` - List all Collections
* `collections_metadata_delete` - Delete Collection Metadata from entitiy
* `collections_metadata_detail` - Add Metadata or Subjects to an Entity in a Collection
* `collections_metadata_registrations_detail` - Retrieve Specific Metadata for a Collection
* `collections_metadata_registrations_list` - Retrieve a list of collected metadata for a collection
* `collections_metadata_subjects_relationships` - Retrieve subject metadata for a specific piece of metadata in a collection
* `collections_metadata_subjects_relationships_update` - Update subjects for a specific piece of metadata in a collection
* `comments_delete` - Delete a comment
* `comments_put` - Update a comment
* `comments_read` - Retrieve a comment
* `files_detail` - Retrieve a file
* `files_patch` - Update a file
* `files_version_detail` - Retrieve a file version
* `files_versions` - List all file versions
* `institutions_detail` - Retrieve an institution
* `institutions_list` - List all institutions
* `institutions_node_list` - List all affiliated nodes
* `institutions_registration_list` - List all affiliated registrations
* `institutions_users_list` - List all affiliated users
* `license_list` - List all licenses
* `licenses_read` - Retrieve a license
* `logs_actions` - Actions
* `logs_read` - Retrieve a log
* `metaschemas_list` - List all metaschemas
* `metaschemas_read` - Retrieve a metaschema
* `nodes_addon_read` - Retrieve an addon
* `nodes_addons_folders_list` - List all addon folders
* `nodes_addons_list` - List all addons
* `nodes_children_create` - Create a child node
* `nodes_children_list` - List all child nodes
* `nodes_citation_list` - Retrieve citation details
* `nodes_citation_read` - Retrieve a styled citation
* `nodes_comment_create` - Create a comment
* `nodes_comments_list` - List all comments
* `nodes_contributors_create` - Create a contributor
* `nodes_contributors_delete` - Delete a contributor
* `nodes_contributors_list` - List all contributors
* `nodes_contributors_partial_update` - Update a contributor
* `nodes_contributors_read` - Retrieve a contributor
* `nodes_create` - Create a node
* `nodes_delete` - Delete a node
* `nodes_draft_registrations_create` - Create a draft registration
* `nodes_draft_registrations_delete` - Delete a draft registration
* `nodes_draft_registrations_list` - List all draft registrations
* `nodes_draft_registrations_partial_update` - Update a draft registration
* `nodes_draft_registrations_read` - Retrieve a draft registration
* `nodes_files_list` - List all node files
* `nodes_files_read` - Retrieve a file
* `nodes_forks_create` - Create a fork of this node
* `nodes_forks_list` - List all forks of this node
* `nodes_identifiers_list` - List all identifiers
* `nodes_institutions_list` - List all institutions
* `nodes_linked_nodes_list` - List all linked nodes
* `nodes_list` - List all nodes
* `nodes_logs_list` - List all logs
* `nodes_node_addon_update` - Update an addon
* `nodes_partial_update` - Update a node
* `nodes_preprints_list` - List all preprints
* `nodes_providers_list` - List all storage providers
* `nodes_providers_read` - Retrieve a storage provider
* `nodes_read` - Retrieve a node
* `nodes_registrations_list` - List all registrations
* `nodes_view_only_links_list` - List all view only links
* `nodes_view_only_links_read` - Retrieve a view only link
* `nodes_wikis_list` - List all wikis
* `preprint_provider_detail` - Retrieve a preprint provider
* `preprint_provider_licenses_list` - List all licenses
* `preprint_provider_list` - List all preprint providers
* `preprint_provider_taxonomies_list` - List all taxonomies
* `preprint_providers_preprints_list` - List all preprints
* `preprints_citation_list` - Retrieve citation details
* `preprints_citation_read` - Retrieve a styled citation
* `preprints_create` - Create a preprint
* `preprints_list` - List all preprints
* `preprints_partial_update` - Update a preprint
* `preprints_read` - Retrieve a preprint
* `registrations_children_list` - List all child registrations
* `registrations_citation_read` - Retrieve a citation
* `registrations_citations_list` - List all citation styles
* `registrations_comments_list` - List all comments
* `registrations_contributors_list` - List all contributors
* `registrations_contributors_read` - Retrieve a contributor
* `registrations_files_list` - List all files
* `registrations_files_read` - Retrieve a file
* `registrations_forks_create` - Create a fork
* `registrations_forks_list` - List all forks
* `registrations_identifiers_list` - List all identifiers
* `registrations_institutions_list` - List all institutions
* `registrations_linked_nodes_list` - List all linked nodes
* `registrations_list` - List all registrations
* `registrations_logs_list` - List all logs
* `registrations_partial_update` - Update a registration
* `registrations_providers_list` - List all storage providers
* `registrations_read` - Retrieve a registration
* `registrations_view_only_links_list` - List all view only links
* `registrations_view_only_links_read` - Retrieve a view only link
* `registrations_wikis_list` - List all wikis
* `taxonomies_list` - List all taxonomies
* `taxonomies_read` - Retrieve a taxonomy
* `users_addons_list` - List all user addons
* `users_addons_read` - Retrieve a user addon
* `users_institutions_list` - List all institutions
* `users_list` - List all users
* `users_nodes_list` - List all nodes
* `users_partial_update` - Update a user
* `users_preprints_list` - List all preprints
* `users_read` - Retrieve a user
* `users_registrations_list` - List all registrations
* `view_only_links_node_list` - List all nodes
* `view_only_links_read` - Retrieve a view only link
* `wiki_content` - Retrieve the Content of a Wiki
* `wiki_read` - Retrieve a Wiki

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
