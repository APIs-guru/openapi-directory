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
    
    req := operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest{
        Security: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams{
            Parent: "nobis",
        },
        QueryParams: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "neque",
            Alt: "json",
            Callback: "magnam",
            CertificateIssuanceConfigID: "non",
            Fields: "inventore",
            Key: "et",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "nemo",
            UploadType: "a",
            UploadProtocol: "voluptate",
        },
        Request: &shared.CertificateIssuanceConfigInput{
            CertificateAuthorityConfig: &shared.CertificateAuthorityConfig{
                CertificateAuthorityServiceConfig: &shared.CertificateAuthorityServiceConfig{
                    CaPool: "sed",
                },
            },
            Description: "provident",
            KeyAlgorithm: "RSA_2048",
            Labels: map[string]string{
                "voluptatem": "eum",
                "quo": "repellat",
            },
            Lifetime: "magni",
            Name: "veritatis",
            RotationWindowPercentage: 1427044159730156609,
        },
    }
    
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(ctx, req)
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

* `CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate` - Creates a new CertificateIssuanceConfig in a given project and location.
* `CertificatemanagerProjectsLocationsCertificateIssuanceConfigsList` - Lists CertificateIssuanceConfigs in a given project and location.
* `CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate` - Creates a new CertificateMapEntry in a given project and location.
* `CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList` - Lists CertificateMapEntries in a given project and location.
* `CertificatemanagerProjectsLocationsCertificateMapsCreate` - Creates a new CertificateMap in a given project and location.
* `CertificatemanagerProjectsLocationsCertificateMapsList` - Lists CertificateMaps in a given project and location.
* `CertificatemanagerProjectsLocationsCertificatesCreate` - Creates a new Certificate in a given project and location.
* `CertificatemanagerProjectsLocationsCertificatesList` - Lists Certificates in a given project and location.
* `CertificatemanagerProjectsLocationsDNSAuthorizationsCreate` - Creates a new DnsAuthorization in a given project and location.
* `CertificatemanagerProjectsLocationsDNSAuthorizationsList` - Lists DnsAuthorizations in a given project and location.
* `CertificatemanagerProjectsLocationsDNSAuthorizationsPatch` - Updates a DnsAuthorization.
* `CertificatemanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `CertificatemanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `CertificatemanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `CertificatemanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `CertificatemanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
