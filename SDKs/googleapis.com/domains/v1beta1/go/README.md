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
    
    req := operations.DomainsProjectsLocationsListRequest{
        Security: operations.DomainsProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DomainsProjectsLocationsListPathParams{
            Name: "sequi",
        },
        QueryParams: operations.DomainsProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "fugiat",
            Alt: "media",
            Callback: "deleniti",
            Fields: "repellendus",
            Filter: "tenetur",
            Key: "tempore",
            OauthToken: "dolorem",
            PageSize: 3929077853732705876,
            PageToken: "commodi",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "totam",
            UploadProtocol: "facere",
        },
    }
    
    res, err := s.Projects.DomainsProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `DomainsProjectsLocationsList` - Lists information about the supported locations for this service.
* `DomainsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `DomainsProjectsLocationsRegistrationsConfigureContactSettings` - Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .
* `DomainsProjectsLocationsRegistrationsConfigureDNSSettings` - Updates a `Registration`'s DNS settings.
* `DomainsProjectsLocationsRegistrationsConfigureManagementSettings` - Updates a `Registration`'s management settings.
* `DomainsProjectsLocationsRegistrationsDelete` - Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED` * `state` is `TRANSFER_FAILED` When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
* `DomainsProjectsLocationsRegistrationsExport` - Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
* `DomainsProjectsLocationsRegistrationsGet` - Gets the details of a `Registration` resource.
* `DomainsProjectsLocationsRegistrationsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DomainsProjectsLocationsRegistrationsImport` - Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.
* `DomainsProjectsLocationsRegistrationsList` - Lists the `Registration` resources in a project.
* `DomainsProjectsLocationsRegistrationsPatch` - Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`
* `DomainsProjectsLocationsRegistrationsRegister` - Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.
* `DomainsProjectsLocationsRegistrationsResetAuthorizationCode` - Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.
* `DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCode` - Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.
* `DomainsProjectsLocationsRegistrationsRetrieveImportableDomains` - Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.
* `DomainsProjectsLocationsRegistrationsRetrieveRegisterParameters` - Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.
* `DomainsProjectsLocationsRegistrationsRetrieveTransferParameters` - Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.
* `DomainsProjectsLocationsRegistrationsSearchDomains` - Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.
* `DomainsProjectsLocationsRegistrationsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `DomainsProjectsLocationsRegistrationsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DomainsProjectsLocationsRegistrationsTransfer` - Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
