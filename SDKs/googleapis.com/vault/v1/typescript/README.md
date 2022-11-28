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
import { VaultMattersAddPermissionsRequest, VaultMattersAddPermissionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: VaultMattersAddPermissionsRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    matterId: "reiciendis",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "illum",
    alt: "proto",
    callback: "totam",
    fields: "aspernatur",
    key: "beatae",
    oauthToken: "occaecati",
    prettyPrint: false,
    quotaUser: "repellat",
    uploadType: "totam",
    uploadProtocol: "amet",
  },
  request: {
    ccMe: false,
    matterPermission: {
      accountId: "aliquam",
      role: "COLLABORATOR",
    },
    sendEmails: false,
  },
};

sdk.matters.vaultMattersAddPermissions(req).then((res: VaultMattersAddPermissionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### matters

* `vaultMattersAddPermissions` - Adds an account as a matter collaborator.
* `vaultMattersClose` - Closes the specified matter. Returns the matter with updated state.
* `vaultMattersCount` - Counts the accounts processed by the specified query.
* `vaultMattersCreate` - Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
* `vaultMattersDelete` - Deletes the specified matter. Returns the matter with updated state.
* `vaultMattersExportsCreate` - Creates an export.
* `vaultMattersExportsDelete` - Deletes an export.
* `vaultMattersExportsGet` - Gets an export.
* `vaultMattersExportsList` - Lists details about the exports in the specified matter.
* `vaultMattersGet` - Gets the specified matter.
* `vaultMattersHoldsAccountsCreate` - Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
* `vaultMattersHoldsAccountsDelete` - Removes an account from a hold.
* `vaultMattersHoldsAccountsList` - Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
* `vaultMattersHoldsAddHeldAccounts` - Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
* `vaultMattersHoldsCreate` - Creates a hold in the specified matter.
* `vaultMattersHoldsDelete` - Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
* `vaultMattersHoldsGet` - Gets the specified hold.
* `vaultMattersHoldsList` - Lists the holds in a matter.
* `vaultMattersHoldsRemoveHeldAccounts` - Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
* `vaultMattersHoldsUpdate` - Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
* `vaultMattersList` - Lists matters the requestor has access to.
* `vaultMattersRemovePermissions` - Removes an account as a matter collaborator.
* `vaultMattersReopen` - Reopens the specified matter. Returns the matter with updated state.
* `vaultMattersSavedQueriesCreate` - Creates a saved query.
* `vaultMattersSavedQueriesDelete` - Deletes the specified saved query.
* `vaultMattersSavedQueriesGet` - Retrieves the specified saved query.
* `vaultMattersSavedQueriesList` - Lists the saved queries in a matter.
* `vaultMattersUndelete` - Undeletes the specified matter. Returns the matter with updated state.
* `vaultMattersUpdate` - Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

### operations

* `vaultOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `vaultOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `vaultOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
