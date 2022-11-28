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
import { PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest, PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    name: "architecto",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "iure",
    alt: "media",
    callback: "aut",
    fields: "est",
    key: "corrupti",
    oauthToken: "eaque",
    prettyPrint: false,
    quotaUser: "et",
    uploadType: "repellendus",
    uploadProtocol: "aut",
  },
  request: {
    pemCaCertificate: "in",
    requestId: "rerum",
    subordinateConfig: {
      certificateAuthority: "distinctio",
      pemIssuerChain: {
        pemCertificates: [
          "maxime",
        ],
      },
    },
  },
};

sdk.projects.privatecaProjectsLocationsCertificateAuthoritiesActivate(req).then((res: PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `privatecaProjectsLocationsCertificateAuthoritiesActivate` - Activate a CertificateAuthority that is in state PENDING_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
* `privatecaProjectsLocationsCertificateAuthoritiesCertificateRevocationListsList` - Lists CertificateRevocationLists.
* `privatecaProjectsLocationsCertificateAuthoritiesCertificatesCreate` - Create a new Certificate in a given Project, Location from a particular CertificateAuthority.
* `privatecaProjectsLocationsCertificateAuthoritiesCertificatesList` - Lists Certificates.
* `privatecaProjectsLocationsCertificateAuthoritiesCertificatesPatch` - Update a Certificate. Currently, the only field you can update is the labels field.
* `privatecaProjectsLocationsCertificateAuthoritiesCertificatesRevoke` - Revoke a Certificate.
* `privatecaProjectsLocationsCertificateAuthoritiesCreate` - Create a new CertificateAuthority in a given Project and Location.
* `privatecaProjectsLocationsCertificateAuthoritiesDisable` - Disable a CertificateAuthority.
* `privatecaProjectsLocationsCertificateAuthoritiesEnable` - Enable a CertificateAuthority.
* `privatecaProjectsLocationsCertificateAuthoritiesFetch` - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state PENDING_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
* `privatecaProjectsLocationsCertificateAuthoritiesList` - Lists CertificateAuthorities.
* `privatecaProjectsLocationsCertificateAuthoritiesRestore` - Restore a CertificateAuthority that is scheduled for deletion.
* `privatecaProjectsLocationsCertificateAuthoritiesScheduleDelete` - Schedule a CertificateAuthority for deletion.
* `privatecaProjectsLocationsList` - Lists information about the supported locations for this service.
* `privatecaProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `privatecaProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `privatecaProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `privatecaProjectsLocationsReusableConfigsGet` - Returns a ReusableConfig.
* `privatecaProjectsLocationsReusableConfigsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `privatecaProjectsLocationsReusableConfigsList` - Lists ReusableConfigs.
* `privatecaProjectsLocationsReusableConfigsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `privatecaProjectsLocationsReusableConfigsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
