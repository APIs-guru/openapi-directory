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
    
req = operations.VaultMattersAddPermissionsRequest(
    security=operations.VaultMattersAddPermissionsSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.VaultMattersAddPermissionsPathParams(
        matter_id="reiciendis",
    ),
    query_params=operations.VaultMattersAddPermissionsQueryParams(
        dollar_xgafv="1",
        access_token="illum",
        alt="proto",
        callback="totam",
        fields="aspernatur",
        key="beatae",
        oauth_token="occaecati",
        pretty_print=False,
        quota_user="repellat",
        upload_type="totam",
        upload_protocol="amet",
    ),
    request=shared.AddMatterPermissionsRequest(
        cc_me=False,
        matter_permission=shared.MatterPermission(
            account_id="aliquam",
            role="COLLABORATOR",
        ),
        send_emails=False,
    ),
)
    
res = s.matters.vault_matters_add_permissions(req)

if res.matter_permission is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### matters

* `vault_matters_add_permissions` - Adds an account as a matter collaborator.
* `vault_matters_close` - Closes the specified matter. Returns the matter with updated state.
* `vault_matters_count` - Counts the accounts processed by the specified query.
* `vault_matters_create` - Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
* `vault_matters_delete` - Deletes the specified matter. Returns the matter with updated state.
* `vault_matters_exports_create` - Creates an export.
* `vault_matters_exports_delete` - Deletes an export.
* `vault_matters_exports_get` - Gets an export.
* `vault_matters_exports_list` - Lists details about the exports in the specified matter.
* `vault_matters_get` - Gets the specified matter.
* `vault_matters_holds_accounts_create` - Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
* `vault_matters_holds_accounts_delete` - Removes an account from a hold.
* `vault_matters_holds_accounts_list` - Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
* `vault_matters_holds_add_held_accounts` - Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
* `vault_matters_holds_create` - Creates a hold in the specified matter.
* `vault_matters_holds_delete` - Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
* `vault_matters_holds_get` - Gets the specified hold.
* `vault_matters_holds_list` - Lists the holds in a matter.
* `vault_matters_holds_remove_held_accounts` - Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
* `vault_matters_holds_update` - Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
* `vault_matters_list` - Lists matters the requestor has access to.
* `vault_matters_remove_permissions` - Removes an account as a matter collaborator.
* `vault_matters_reopen` - Reopens the specified matter. Returns the matter with updated state.
* `vault_matters_saved_queries_create` - Creates a saved query.
* `vault_matters_saved_queries_delete` - Deletes the specified saved query.
* `vault_matters_saved_queries_get` - Retrieves the specified saved query.
* `vault_matters_saved_queries_list` - Lists the saved queries in a matter.
* `vault_matters_undelete` - Undeletes the specified matter. Returns the matter with updated state.
* `vault_matters_update` - Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

### operations

* `vault_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `vault_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `vault_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
