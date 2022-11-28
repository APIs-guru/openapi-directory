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
import { CloudkmsProjectsLocationsEkmConnectionsCreateRequest, CloudkmsProjectsLocationsEkmConnectionsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudkmsProjectsLocationsEkmConnectionsCreateRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    parent: "quidem",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "dolores",
    alt: "media",
    callback: "illo",
    ekmConnectionId: "nobis",
    fields: "in",
    key: "consequuntur",
    oauthToken: "unde",
    prettyPrint: true,
    quotaUser: "debitis",
    uploadType: "velit",
    uploadProtocol: "id",
  },
  request: {
    etag: "occaecati",
    serviceResolvers: [
      {
        endpointFilter: "perferendis",
        hostname: "sed",
        serverCertificates: [
          {
            rawDer: "ipsam",
          },
          {
            rawDer: "molestiae",
          },
          {
            rawDer: "mollitia",
          },
        ],
        serviceDirectoryService: "omnis",
      },
      {
        endpointFilter: "quaerat",
        hostname: "eligendi",
        serverCertificates: [
          {
            rawDer: "cum",
          },
        ],
        serviceDirectoryService: "doloribus",
      },
    ],
  },
};

sdk.projects.cloudkmsProjectsLocationsEkmConnectionsCreate(req).then((res: CloudkmsProjectsLocationsEkmConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `cloudkmsProjectsLocationsEkmConnectionsCreate` - Creates a new EkmConnection in a given Project and Location.
* `cloudkmsProjectsLocationsEkmConnectionsList` - Lists EkmConnections.
* `cloudkmsProjectsLocationsGenerateRandomBytes` - Generate random bytes using the Cloud KMS randomness source in the provided location.
* `cloudkmsProjectsLocationsKeyRingsCreate` - Create a new KeyRing in a given Project and Location.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate` - Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt` - Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign` - Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate` - Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy` - Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey` - Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport` - Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList` - Lists CryptoKeyVersions.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign` - Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify` - Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch` - Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore` - Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt` - Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt` - Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysList` - Lists CryptoKeys.
* `cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion` - Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
* `cloudkmsProjectsLocationsKeyRingsImportJobsCreate` - Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
* `cloudkmsProjectsLocationsKeyRingsImportJobsGet` - Returns metadata for a given ImportJob.
* `cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `cloudkmsProjectsLocationsKeyRingsImportJobsList` - Lists ImportJobs.
* `cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `cloudkmsProjectsLocationsKeyRingsList` - Lists KeyRings.
* `cloudkmsProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
