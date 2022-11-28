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
    
    req := operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest{
        Security: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams{
            Name: "tempora",
        },
        QueryParams: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams{
            DollarXgafv: "1",
            AccessToken: "consequatur",
            Alt: "proto",
            Callback: "eveniet",
            Fields: "reiciendis",
            Key: "voluptatem",
            OauthToken: "porro",
            PrettyPrint: false,
            QuotaUser: "dolores",
            UploadType: "dicta",
            UploadProtocol: "autem",
        },
        Request: &shared.ActivateCertificateAuthorityRequest{
            PemCaCertificate: "ut",
            RequestID: "dignissimos",
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: "corporis",
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "et",
                        "et",
                        "corporis",
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(ctx, req)
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

* `PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate` - Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
* `PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList` - Lists CertificateRevocationLists.
* `PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate` - Create a new CertificateAuthority in a given Project and Location.
* `PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable` - Disable a CertificateAuthority.
* `PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable` - Enable a CertificateAuthority.
* `PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch` - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
* `PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesList` - Lists CertificateAuthorities.
* `PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete` - Undelete a CertificateAuthority that has been deleted.
* `PrivatecaProjectsLocationsCaPoolsCertificatesCreate` - Create a new Certificate in a given Project, Location from a particular CaPool.
* `PrivatecaProjectsLocationsCaPoolsCertificatesList` - Lists Certificates.
* `PrivatecaProjectsLocationsCaPoolsCertificatesRevoke` - Revoke a Certificate.
* `PrivatecaProjectsLocationsCaPoolsCreate` - Create a CaPool.
* `PrivatecaProjectsLocationsCaPoolsFetchCaCerts` - FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.
* `PrivatecaProjectsLocationsCaPoolsList` - Lists CaPools.
* `PrivatecaProjectsLocationsCertificateTemplatesCreate` - Create a new CertificateTemplate in a given Project and Location.
* `PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `PrivatecaProjectsLocationsCertificateTemplatesList` - Lists CertificateTemplates.
* `PrivatecaProjectsLocationsCertificateTemplatesPatch` - Update a CertificateTemplate.
* `PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `PrivatecaProjectsLocationsList` - Lists information about the supported locations for this service.
* `PrivatecaProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `PrivatecaProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `PrivatecaProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `PrivatecaProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
