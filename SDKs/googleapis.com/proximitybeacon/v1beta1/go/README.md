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
    
    req := operations.ProximitybeaconBeaconinfoGetforobservedRequest{
        QueryParams: operations.ProximitybeaconBeaconinfoGetforobservedQueryParams{
            DollarXgafv: "1",
            AccessToken: "illum",
            Alt: "proto",
            Callback: "dicta",
            Fields: "numquam",
            Key: "error",
            OauthToken: "ad",
            PrettyPrint: false,
            QuotaUser: "explicabo",
            UploadType: "dolorem",
            UploadProtocol: "dolor",
        },
        Request: &shared.GetInfoForObservedBeaconsRequest{
            NamespacedTypes: []string{
                "incidunt",
                "dolorem",
                "soluta",
            },
            Observations: []shared.Observation{
                shared.Observation{
                    AdvertisedID: &shared.AdvertisedID{
                        ID: "voluptates",
                        Type: "IBEACON",
                    },
                    Telemetry: "sit",
                    TimestampMs: "ab",
                },
                shared.Observation{
                    AdvertisedID: &shared.AdvertisedID{
                        ID: "exercitationem",
                        Type: "TYPE_UNSPECIFIED",
                    },
                    Telemetry: "et",
                    TimestampMs: "laborum",
                },
                shared.Observation{
                    AdvertisedID: &shared.AdvertisedID{
                        ID: "pariatur",
                        Type: "IBEACON",
                    },
                    Telemetry: "corporis",
                    TimestampMs: "itaque",
                },
            },
        },
    }
    
    res, err := s.Beaconinfo.ProximitybeaconBeaconinfoGetforobserved(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInfoForObservedBeaconsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### beaconinfo

* `ProximitybeaconBeaconinfoGetforobserved` - Given one or more beacon observations, returns any beacon information and attachments accessible to your application. Authorize by using the [API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key) for the application.

### beacons

* `ProximitybeaconBeaconsActivate` - Activates a beacon. A beacon that is active will return information and attachment data when queried via `beaconinfo.getforobserved`. Calling this method on an already active beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsAttachmentsBatchDelete` - Deletes multiple attachments on a given beacon. This operation is permanent and cannot be undone. You can optionally specify `namespacedType` to choose which attachments should be deleted. If you do not specify `namespacedType`, all your attachments on the given beacon will be deleted. You also may explicitly specify `*/*` to delete all. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsAttachmentsCreate` - Associates the given data with the specified beacon. Attachment data must contain two parts: - A namespaced type. - The actual attachment data itself. The namespaced type consists of two parts, the namespace and the type. The namespace must be one of the values returned by the `namespaces` endpoint, while the type can be a string of any characters except for the forward slash (`/`) up to 100 characters in length. Attachment data can be up to 1024 bytes long. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsAttachmentsDelete` - Deletes the specified attachment for the given beacon. Each attachment has a unique attachment name (`attachmentName`) which is returned when you fetch the attachment data via this API. You specify this with the delete request to control which attachment is removed. This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsAttachmentsList` - Returns the attachments for the specified beacon that match the specified namespaced-type pattern. To control which namespaced types are returned, you add the `namespacedType` query parameter to the request. You must either use `*/*`, to return all attachments, or the namespace must be one of the ones returned from the `namespaces` endpoint. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsDeactivate` - Deactivates a beacon. Once deactivated, the API will not return information nor attachment data for the beacon when queried via `beaconinfo.getforobserved`. Calling this method on an already inactive beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsDecommission` - Decommissions the specified beacon in the service. This beacon will no longer be returned from `beaconinfo.getforobserved`. This operation is permanent -- you will not be able to re-register a beacon with this ID again. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsDelete` - Deletes the specified beacon including all diagnostics data for the beacon as well as any attachments on the beacon (including those belonging to other projects). This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsDiagnosticsList` - List the diagnostics for a single beacon. You can also list diagnostics for all the beacons owned by your Google Developers Console project by using the beacon name `beacons/-`. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsGet` - Returns detailed information about the specified beacon. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project. Requests may supply an Eddystone-EID beacon name in the form: `beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID broadcast by the beacon. The returned `Beacon` object will contain the beacon's stable Eddystone-UID. Clients not authorized to resolve the beacon's ephemeral Eddystone-EID broadcast will receive an error.
* `ProximitybeaconBeaconsList` - Searches the beacon registry for beacons that match the given search criteria. Only those beacons that the client has permission to list will be returned. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsRegister` - Registers a previously unregistered beacon given its `advertisedId`. These IDs are unique within the system. An ID can be registered only once. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconBeaconsUpdate` - Updates the information about the specified beacon. **Any field that you do not populate in the submitted beacon will be permanently erased**, so you should follow the "read, modify, write" pattern to avoid inadvertently destroying data. Changes to the beacon status via this method will be silently ignored. To update beacon status, use the separate methods on this API for activation, deactivation, and decommissioning. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

### namespaces

* `ProximitybeaconNamespacesList` - Lists all attachment namespaces owned by your Google Developers Console project. Attachment data associated with a beacon must include a namespaced type, and the namespace must be owned by your project. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
* `ProximitybeaconNamespacesUpdate` - Updates the information about the specified namespace. Only the namespace visibility can be updated.

### v1beta1

* `ProximitybeaconGetEidparams` - Gets the Proximity Beacon API's current public key and associated parameters used to initiate the Diffie-Hellman key exchange required to register a beacon that broadcasts the Eddystone-EID format. This key changes periodically; clients may cache it and re-use the same public key to provision and register multiple beacons. However, clients should be prepared to refresh this key when they encounter an error registering an Eddystone-EID beacon.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
