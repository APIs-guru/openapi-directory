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
    
req = operations.TagmanagerAccountsContainersCombineRequest(
    security=operations.TagmanagerAccountsContainersCombineSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.TagmanagerAccountsContainersCombinePathParams(
        path="quia",
    ),
    query_params=operations.TagmanagerAccountsContainersCombineQueryParams(
        dollar_xgafv="1",
        access_token="blanditiis",
        allow_user_permission_feature_update=True,
        alt="media",
        callback="quibusdam",
        container_id="ad",
        fields="labore",
        key="quo",
        oauth_token="excepturi",
        pretty_print=False,
        quota_user="dolore",
        setting_source="settingSourceUnspecified",
        upload_type="consequatur",
        upload_protocol="commodi",
    ),
)
    
res = s.accounts.tagmanager_accounts_containers_combine(req)

if res.container is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `tagmanager_accounts_containers_combine` - Combines Containers.
* `tagmanager_accounts_containers_create` - Creates a Container.
* `tagmanager_accounts_containers_destinations_link` - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
* `tagmanager_accounts_containers_destinations_list` - Lists all Destinations linked to a GTM Container.
* `tagmanager_accounts_containers_environments_create` - Creates a GTM Environment.
* `tagmanager_accounts_containers_environments_list` - Lists all GTM Environments of a GTM Container.
* `tagmanager_accounts_containers_environments_reauthorize` - Re-generates the authorization code for a GTM Environment.
* `tagmanager_accounts_containers_list` - Lists all Containers that belongs to a GTM Account.
* `tagmanager_accounts_containers_lookup` - Looks up a Container by destination ID.
* `tagmanager_accounts_containers_move_tag_id` - Move Tag ID out of a Container.
* `tagmanager_accounts_containers_snippet` - Gets the tagging snippet for a Container.
* `tagmanager_accounts_containers_version_headers_latest` - Gets the latest container version header
* `tagmanager_accounts_containers_version_headers_list` - Lists all Container Versions of a GTM Container.
* `tagmanager_accounts_containers_versions_live` - Gets the live (i.e. published) container version
* `tagmanager_accounts_containers_versions_publish` - Publishes a Container Version.
* `tagmanager_accounts_containers_versions_set_latest` - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
* `tagmanager_accounts_containers_versions_undelete` - Undeletes a Container Version.
* `tagmanager_accounts_containers_workspaces_built_in_variables_create` - Creates one or more GTM Built-In Variables.
* `tagmanager_accounts_containers_workspaces_built_in_variables_list` - Lists all the enabled Built-In Variables of a GTM Container.
* `tagmanager_accounts_containers_workspaces_built_in_variables_revert` - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
* `tagmanager_accounts_containers_workspaces_clients_create` - Creates a GTM Client.
* `tagmanager_accounts_containers_workspaces_clients_list` - Lists all GTM Clients of a GTM container workspace.
* `tagmanager_accounts_containers_workspaces_create` - Creates a Workspace.
* `tagmanager_accounts_containers_workspaces_create_version` - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
* `tagmanager_accounts_containers_workspaces_folders_create` - Creates a GTM Folder.
* `tagmanager_accounts_containers_workspaces_folders_entities` - List all entities in a GTM Folder.
* `tagmanager_accounts_containers_workspaces_folders_list` - Lists all GTM Folders of a Container.
* `tagmanager_accounts_containers_workspaces_folders_move_entities_to_folder` - Moves entities to a GTM Folder.
* `tagmanager_accounts_containers_workspaces_get_status` - Finds conflicting and modified entities in the workspace.
* `tagmanager_accounts_containers_workspaces_gtag_config_create` - Creates a Google tag config.
* `tagmanager_accounts_containers_workspaces_gtag_config_list` - Lists all Google tag configs in a Container.
* `tagmanager_accounts_containers_workspaces_list` - Lists all Workspaces that belong to a GTM Container.
* `tagmanager_accounts_containers_workspaces_quick_preview` - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
* `tagmanager_accounts_containers_workspaces_resolve_conflict` - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
* `tagmanager_accounts_containers_workspaces_sync` - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
* `tagmanager_accounts_containers_workspaces_tags_create` - Creates a GTM Tag.
* `tagmanager_accounts_containers_workspaces_tags_list` - Lists all GTM Tags of a Container.
* `tagmanager_accounts_containers_workspaces_templates_create` - Creates a GTM Custom Template.
* `tagmanager_accounts_containers_workspaces_templates_list` - Lists all GTM Templates of a GTM container workspace.
* `tagmanager_accounts_containers_workspaces_triggers_create` - Creates a GTM Trigger.
* `tagmanager_accounts_containers_workspaces_triggers_list` - Lists all GTM Triggers of a Container.
* `tagmanager_accounts_containers_workspaces_variables_create` - Creates a GTM Variable.
* `tagmanager_accounts_containers_workspaces_variables_list` - Lists all GTM Variables of a Container.
* `tagmanager_accounts_containers_workspaces_zones_create` - Creates a GTM Zone.
* `tagmanager_accounts_containers_workspaces_zones_list` - Lists all GTM Zones of a GTM container workspace.
* `tagmanager_accounts_containers_workspaces_zones_revert` - Reverts changes to a GTM Zone in a GTM Workspace.
* `tagmanager_accounts_list` - Lists all GTM Accounts that a user has access to.
* `tagmanager_accounts_user_permissions_create` - Creates a user's Account & Container access.
* `tagmanager_accounts_user_permissions_delete` - Removes a user from the account, revoking access to it and all of its containers.
* `tagmanager_accounts_user_permissions_get` - Gets a user's Account & Container access.
* `tagmanager_accounts_user_permissions_list` - List all users that have access to the account along with Account and Container user access granted to each of them.
* `tagmanager_accounts_user_permissions_update` - Updates a user's Account & Container access.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
