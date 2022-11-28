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
    
    req := operations.VaultMattersAddPermissionsRequest{
        Security: operations.VaultMattersAddPermissionsSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.VaultMattersAddPermissionsPathParams{
            MatterID: "reiciendis",
        },
        QueryParams: operations.VaultMattersAddPermissionsQueryParams{
            DollarXgafv: "1",
            AccessToken: "illum",
            Alt: "proto",
            Callback: "totam",
            Fields: "aspernatur",
            Key: "beatae",
            OauthToken: "occaecati",
            PrettyPrint: false,
            QuotaUser: "repellat",
            UploadType: "totam",
            UploadProtocol: "amet",
        },
        Request: &shared.AddMatterPermissionsRequest{
            CcMe: false,
            MatterPermission: &shared.MatterPermission{
                AccountID: "aliquam",
                Role: "COLLABORATOR",
            },
            SendEmails: false,
        },
    }
    
    res, err := s.Matters.VaultMattersAddPermissions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MatterPermission != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### matters

* `VaultMattersAddPermissions` - Adds an account as a matter collaborator.
* `VaultMattersClose` - Closes the specified matter. Returns the matter with updated state.
* `VaultMattersCount` - Counts the accounts processed by the specified query.
* `VaultMattersCreate` - Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
* `VaultMattersDelete` - Deletes the specified matter. Returns the matter with updated state.
* `VaultMattersExportsCreate` - Creates an export.
* `VaultMattersExportsDelete` - Deletes an export.
* `VaultMattersExportsGet` - Gets an export.
* `VaultMattersExportsList` - Lists details about the exports in the specified matter.
* `VaultMattersGet` - Gets the specified matter.
* `VaultMattersHoldsAccountsCreate` - Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
* `VaultMattersHoldsAccountsDelete` - Removes an account from a hold.
* `VaultMattersHoldsAccountsList` - Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
* `VaultMattersHoldsAddHeldAccounts` - Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
* `VaultMattersHoldsCreate` - Creates a hold in the specified matter.
* `VaultMattersHoldsDelete` - Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
* `VaultMattersHoldsGet` - Gets the specified hold.
* `VaultMattersHoldsList` - Lists the holds in a matter.
* `VaultMattersHoldsRemoveHeldAccounts` - Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
* `VaultMattersHoldsUpdate` - Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
* `VaultMattersList` - Lists matters the requestor has access to.
* `VaultMattersRemovePermissions` - Removes an account as a matter collaborator.
* `VaultMattersReopen` - Reopens the specified matter. Returns the matter with updated state.
* `VaultMattersSavedQueriesCreate` - Creates a saved query.
* `VaultMattersSavedQueriesDelete` - Deletes the specified saved query.
* `VaultMattersSavedQueriesGet` - Retrieves the specified saved query.
* `VaultMattersSavedQueriesList` - Lists the saved queries in a matter.
* `VaultMattersUndelete` - Undeletes the specified matter. Returns the matter with updated state.
* `VaultMattersUpdate` - Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

### operations

* `VaultOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `VaultOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `VaultOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
