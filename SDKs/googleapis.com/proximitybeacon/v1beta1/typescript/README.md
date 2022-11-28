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
import { ProximitybeaconBeaconinfoGetforobservedRequest, ProximitybeaconBeaconinfoGetforobservedResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ProximitybeaconBeaconinfoGetforobservedRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "illum",
    alt: "proto",
    callback: "dicta",
    fields: "numquam",
    key: "error",
    oauthToken: "ad",
    prettyPrint: false,
    quotaUser: "explicabo",
    uploadType: "dolorem",
    uploadProtocol: "dolor",
  },
  request: {
    namespacedTypes: [
      "incidunt",
      "dolorem",
      "soluta",
    ],
    observations: [
      {
        advertisedId: {
          id: "voluptates",
          type: "IBEACON",
        },
        telemetry: "sit",
        timestampMs: "ab",
      },
      {
        advertisedId: {
          id: "exercitationem",
          type: "TYPE_UNSPECIFIED",
        },
        telemetry: "et",
        timestampMs: "laborum",
      },
      {
        advertisedId: {
          id: "pariatur",
          type: "IBEACON",
        },
        telemetry: "corporis",
        timestampMs: "itaque",
      },
    ],
  },
};

sdk.beaconinfo.proximitybeaconBeaconinfoGetforobserved(req).then((res: ProximitybeaconBeaconinfoGetforobservedResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### beaconinfo

* `proximitybeaconBeaconinfoGetforobserved` - Given one or more beacon observations, returns any beacon information and attachments accessible to your application. Authorize by using the [API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key) for the application.

### beacons

* `proximitybeaconBeaconsActivate` - Activates a beacon. A beacon that is active will return information and attachment data when queried via `beaconinfo.getforobserved`. Calling this method on an already active beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsAttachmentsBatchDelete` - Deletes multiple attachments on a given beacon. This operation is permanent and cannot be undone. You can optionally specify `namespacedType` to choose which attachments should be deleted. If you do not specify `namespacedType`, all your attachments on the given beacon will be deleted. You also may explicitly specify `*/*` to delete all. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsAttachmentsCreate` - Associates the given data with the specified beacon. Attachment data must contain two parts: - A namespaced type. - The actual attachment data itself. The namespaced type consists of two parts, the namespace and the type. The namespace must be one of the values returned by the `namespaces` endpoint, while the type can be a string of any characters except for the forward slash (`/`) up to 100 characters in length. Attachment data can be up to 1024 bytes long. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsAttachmentsDelete` - Deletes the specified attachment for the given beacon. Each attachment has a unique attachment name (`attachmentName`) which is returned when you fetch the attachment data via this API. You specify this with the delete request to control which attachment is removed. This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsAttachmentsList` - Returns the attachments for the specified beacon that match the specified namespaced-type pattern. To control which namespaced types are returned, you add the `namespacedType` query parameter to the request. You must either use `*/*`, to return all attachments, or the namespace must be one of the ones returned from the `namespaces` endpoint. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsDeactivate` - Deactivates a beacon. Once deactivated, the API will not return information nor attachment data for the beacon when queried via `beaconinfo.getforobserved`. Calling this method on an already inactive beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsDecommission` - Decommissions the specified beacon in the service. This beacon will no longer be returned from `beaconinfo.getforobserved`. This operation is permanent -- you will not be able to re-register a beacon with this ID again. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsDelete` - Deletes the specified beacon including all diagnostics data for the beacon as well as any attachments on the beacon (including those belonging to other projects). This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsDiagnosticsList` - List the diagnostics for a single beacon. You can also list diagnostics for all the beacons owned by your Google Developers Console project by using the beacon name `beacons/-`. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsGet` - Returns detailed information about the specified beacon. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project. Requests may supply an Eddystone-EID beacon name in the form: `beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID broadcast by the beacon. The returned `Beacon` object will contain the beacon's stable Eddystone-UID. Clients not authorized to resolve the beacon's ephemeral Eddystone-EID broadcast will receive an error.
* `proximitybeaconBeaconsList` - Searches the beacon registry for beacons that match the given search criteria. Only those beacons that the client has permission to list will be returned. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsRegister` - Registers a previously unregistered beacon given its `advertisedId`. These IDs are unique within the system. An ID can be registered only once. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconBeaconsUpdate` - Updates the information about the specified beacon. **Any field that you do not populate in the submitted beacon will be permanently erased**, so you should follow the "read, modify, write" pattern to avoid inadvertently destroying data. Changes to the beacon status via this method will be silently ignored. To update beacon status, use the separate methods on this API for activation, deactivation, and decommissioning. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

### namespaces

* `proximitybeaconNamespacesList` - Lists all attachment namespaces owned by your Google Developers Console project. Attachment data associated with a beacon must include a namespaced type, and the namespace must be owned by your project. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `proximitybeaconNamespacesUpdate` - Updates the information about the specified namespace. Only the namespace visibility can be updated.

### v1beta1

* `proximitybeaconGetEidparams` - Gets the Proximity Beacon API's current public key and associated parameters used to initiate the Diffie-Hellman key exchange required to register a beacon that broadcasts the Eddystone-EID format. This key changes periodically; clients may cache it and re-use the same public key to provision and register multiple beacons. However, clients should be prepared to refresh this key when they encounter an error registering an Eddystone-EID beacon.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
