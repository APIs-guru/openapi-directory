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
import { CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest, CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "nobis",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "neque",
    alt: "json",
    callback: "magnam",
    certificateIssuanceConfigId: "non",
    fields: "inventore",
    key: "et",
    oauthToken: "et",
    prettyPrint: true,
    quotaUser: "nemo",
    uploadType: "a",
    uploadProtocol: "voluptate",
  },
  request: {
    certificateAuthorityConfig: {
      certificateAuthorityServiceConfig: {
        caPool: "sed",
      },
    },
    description: "provident",
    keyAlgorithm: "RSA_2048",
    labels: {
      "voluptatem": "eum",
      "quo": "repellat",
    },
    lifetime: "magni",
    name: "veritatis",
    rotationWindowPercentage: 1427044159730156609,
  },
};

sdk.projects.certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req).then((res: CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate` - Creates a new CertificateIssuanceConfig in a given project and location.
* `certificatemanagerProjectsLocationsCertificateIssuanceConfigsList` - Lists CertificateIssuanceConfigs in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate` - Creates a new CertificateMapEntry in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList` - Lists CertificateMapEntries in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsCreate` - Creates a new CertificateMap in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsList` - Lists CertificateMaps in a given project and location.
* `certificatemanagerProjectsLocationsCertificatesCreate` - Creates a new Certificate in a given project and location.
* `certificatemanagerProjectsLocationsCertificatesList` - Lists Certificates in a given project and location.
* `certificatemanagerProjectsLocationsDnsAuthorizationsCreate` - Creates a new DnsAuthorization in a given project and location.
* `certificatemanagerProjectsLocationsDnsAuthorizationsList` - Lists DnsAuthorizations in a given project and location.
* `certificatemanagerProjectsLocationsDnsAuthorizationsPatch` - Updates a DnsAuthorization.
* `certificatemanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `certificatemanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `certificatemanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `certificatemanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `certificatemanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
