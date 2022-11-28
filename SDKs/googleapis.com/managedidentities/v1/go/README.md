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
    
    req := operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest{
        Security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustPathParams{
            Name: "soluta",
        },
        QueryParams: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustQueryParams{
            DollarXgafv: "1",
            AccessToken: "quidem",
            Alt: "json",
            Callback: "ipsam",
            Fields: "totam",
            Key: "reprehenderit",
            OauthToken: "iste",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "quod",
            UploadProtocol: "consequuntur",
        },
        Request: &shared.AttachTrustRequestInput{
            Trust: &shared.TrustInput{
                SelectiveAuthentication: false,
                TargetDNSIPAddresses: []string{
                    "perspiciatis",
                    "eius",
                    "recusandae",
                },
                TargetDomainName: "natus",
                TrustDirection: "TRUST_DIRECTION_UNSPECIFIED",
                TrustHandshakeSecret: "quia",
                TrustType: "FOREST",
            },
        },
    }
    
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust` - Adds an AD trust to a domain.
* `ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreate` - Creates a Backup for a domain.
* `ManagedidentitiesProjectsLocationsGlobalDomainsBackupsList` - Lists Backup in a given project.
* `ManagedidentitiesProjectsLocationsGlobalDomainsCreate` - Creates a Microsoft AD domain.
* `ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrust` - Removes an AD trust.
* `ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchema` - Extend Schema for Domain
* `ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings` - Gets the domain ldaps settings.
* `ManagedidentitiesProjectsLocationsGlobalDomainsList` - Lists domains in a project.
* `ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust` - Updates the DNS conditional forwarder.
* `ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword` - Resets a domain's administrator password.
* `ManagedidentitiesProjectsLocationsGlobalDomainsRestore` - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
* `ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsList` - Lists SqlIntegrations in a given domain.
* `ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings` - Patches a single ldaps settings.
* `ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrust` - Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
* `ManagedidentitiesProjectsLocationsGlobalOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsCreate` - Creates a Peering for Managed AD instance.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsDelete` - Deletes identified Peering.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsGet` - Gets details of a single Peering.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsList` - Lists Peerings in a given project.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsPatch` - Updates the labels for specified Peering.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `ManagedidentitiesProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
