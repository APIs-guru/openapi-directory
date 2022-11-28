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
import { ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest, ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    name: "voluptatibus",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "fugiat",
    alt: "proto",
    callback: "necessitatibus",
    fields: "repellendus",
    key: "in",
    oauthToken: "occaecati",
    prettyPrint: false,
    quotaUser: "sed",
    uploadType: "tenetur",
    uploadProtocol: "molestiae",
  },
  request: {
    trust: {
      createTime: "tenetur",
      lastKnownTrustConnectedHeartbeatTime: "quia",
      selectiveAuthentication: true,
      state: "DISCONNECTED",
      stateDescription: "ratione",
      targetDnsIpAddresses: [
        "a",
      ],
      targetDomainName: "rem",
      trustDirection: "BIDIRECTIONAL",
      trustHandshakeSecret: "est",
      trustType: "TRUST_TYPE_UNSPECIFIED",
      updateTime: "qui",
    },
  },
};

sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req).then((res: ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `managedidentitiesProjectsLocationsGlobalDomainsAttachTrust` - Adds AD trust in a given domain. Operation
* `managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate` - Creates a Backup for a domain.
* `managedidentitiesProjectsLocationsGlobalDomainsBackupsList` - Lists Backup in a given project.
* `managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission` - AuditMigration API gets the current state of DomainMigration
* `managedidentitiesProjectsLocationsGlobalDomainsCreate` - Creates a Microsoft AD Domain in a given project. Operation
* `managedidentitiesProjectsLocationsGlobalDomainsDetachTrust` - Removes identified trust. Operation
* `managedidentitiesProjectsLocationsGlobalDomainsDisableMigration` - Disable Domain Migration
* `managedidentitiesProjectsLocationsGlobalDomainsEnableMigration` - Enable Domain Migration
* `managedidentitiesProjectsLocationsGlobalDomainsExtendSchema` - Extend Schema for Domain
* `managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings` - Gets the domain ldaps settings.
* `managedidentitiesProjectsLocationsGlobalDomainsList` - Lists Domains in a given project.
* `managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust` - Updates the dns conditional forwarder. Operation
* `managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword` - Resets managed identities admin password identified by managed_identities_admin_name
* `managedidentitiesProjectsLocationsGlobalDomainsRestore` - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
* `managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList` - Lists SQLIntegrations in a given domain.
* `managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings` - Patches a single ldaps settings.
* `managedidentitiesProjectsLocationsGlobalDomainsValidateTrust` - Validate the trust state Operation
* `managedidentitiesProjectsLocationsGlobalOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `managedidentitiesProjectsLocationsGlobalOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `managedidentitiesProjectsLocationsGlobalPeeringsCreate` - Creates a Peering for Managed AD instance.
* `managedidentitiesProjectsLocationsGlobalPeeringsDelete` - Deletes identified Peering.
* `managedidentitiesProjectsLocationsGlobalPeeringsGet` - Gets details of a single Peering.
* `managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `managedidentitiesProjectsLocationsGlobalPeeringsList` - Lists Peerings in a given project.
* `managedidentitiesProjectsLocationsGlobalPeeringsPatch` - Updates the labels for specified Peering.
* `managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `managedidentitiesProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
