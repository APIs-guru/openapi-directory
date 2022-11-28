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
    
req = operations.TagmanagerAccountsContainersCreateRequest(
    security=operations.TagmanagerAccountsContainersCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.TagmanagerAccountsContainersCreatePathParams(
        account_id="repellat",
    ),
    query_params=operations.TagmanagerAccountsContainersCreateQueryParams(
        dollar_xgafv="2",
        access_token="nulla",
        alt="json",
        callback="earum",
        fields="reiciendis",
        key="qui",
        oauth_token="aspernatur",
        pretty_print=False,
        quota_user="aliquam",
        upload_type="magnam",
        upload_protocol="ratione",
    ),
    request=shared.Container(
        account_id="non",
        container_id="ea",
        domain_name=[
            "ab",
            "et",
        ],
        enabled_built_in_variable=[
            "event",
        ],
        fingerprint="doloribus",
        name="aut",
        notes="autem",
        public_id="iusto",
        time_zone_country_id="recusandae",
        time_zone_id="itaque",
        usage_context=[
            "android",
            "iosSdk5",
            "android",
        ],
    ),
)
    
res = s.accounts.tagmanager_accounts_containers_create(req)

if res.container is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `tagmanager_accounts_containers_create` - Creates a Container.
* `tagmanager_accounts_containers_delete` - Deletes a Container.
* `tagmanager_accounts_containers_environments_create` - Creates a GTM Environment.
* `tagmanager_accounts_containers_environments_delete` - Deletes a GTM Environment.
* `tagmanager_accounts_containers_environments_get` - Gets a GTM Environment.
* `tagmanager_accounts_containers_environments_list` - Lists all GTM Environments of a GTM Container.
* `tagmanager_accounts_containers_environments_update` - Updates a GTM Environment.
* `tagmanager_accounts_containers_folders_create` - Creates a GTM Folder.
* `tagmanager_accounts_containers_folders_delete` - Deletes a GTM Folder.
* `tagmanager_accounts_containers_folders_entities_list` - List all entities in a GTM Folder.
* `tagmanager_accounts_containers_folders_get` - Gets a GTM Folder.
* `tagmanager_accounts_containers_folders_list` - Lists all GTM Folders of a Container.
* `tagmanager_accounts_containers_folders_update` - Updates a GTM Folder.
* `tagmanager_accounts_containers_get` - Gets a Container.
* `tagmanager_accounts_containers_list` - Lists all Containers that belongs to a GTM Account.
* `tagmanager_accounts_containers_move_folders_update` - Moves entities to a GTM Folder.
* `tagmanager_accounts_containers_reauthorize_environments_update` - Re-generates the authorization code for a GTM Environment.
* `tagmanager_accounts_containers_tags_create` - Creates a GTM Tag.
* `tagmanager_accounts_containers_tags_delete` - Deletes a GTM Tag.
* `tagmanager_accounts_containers_tags_get` - Gets a GTM Tag.
* `tagmanager_accounts_containers_tags_list` - Lists all GTM Tags of a Container.
* `tagmanager_accounts_containers_tags_update` - Updates a GTM Tag.
* `tagmanager_accounts_containers_triggers_create` - Creates a GTM Trigger.
* `tagmanager_accounts_containers_triggers_delete` - Deletes a GTM Trigger.
* `tagmanager_accounts_containers_triggers_get` - Gets a GTM Trigger.
* `tagmanager_accounts_containers_triggers_list` - Lists all GTM Triggers of a Container.
* `tagmanager_accounts_containers_triggers_update` - Updates a GTM Trigger.
* `tagmanager_accounts_containers_update` - Updates a Container.
* `tagmanager_accounts_containers_variables_create` - Creates a GTM Variable.
* `tagmanager_accounts_containers_variables_delete` - Deletes a GTM Variable.
* `tagmanager_accounts_containers_variables_get` - Gets a GTM Variable.
* `tagmanager_accounts_containers_variables_list` - Lists all GTM Variables of a Container.
* `tagmanager_accounts_containers_variables_update` - Updates a GTM Variable.
* `tagmanager_accounts_containers_versions_create` - Creates a Container Version.
* `tagmanager_accounts_containers_versions_delete` - Deletes a Container Version.
* `tagmanager_accounts_containers_versions_get` - Gets a Container Version.
* `tagmanager_accounts_containers_versions_list` - Lists all Container Versions of a GTM Container.
* `tagmanager_accounts_containers_versions_publish` - Publishes a Container Version.
* `tagmanager_accounts_containers_versions_restore` - Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
* `tagmanager_accounts_containers_versions_undelete` - Undeletes a Container Version.
* `tagmanager_accounts_containers_versions_update` - Updates a Container Version.
* `tagmanager_accounts_get` - Gets a GTM Account.
* `tagmanager_accounts_list` - Lists all GTM Accounts that a user has access to.
* `tagmanager_accounts_permissions_create` - Creates a user's Account & Container Permissions.
* `tagmanager_accounts_permissions_delete` - Removes a user from the account, revoking access to it and all of its containers.
* `tagmanager_accounts_permissions_get` - Gets a user's Account & Container Permissions.
* `tagmanager_accounts_permissions_list` - List all users that have access to the account along with Account and Container Permissions granted to each of them.
* `tagmanager_accounts_permissions_update` - Updates a user's Account & Container Permissions.
* `tagmanager_accounts_update` - Updates a GTM Account.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
