import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Beacons {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * proximitybeaconBeaconsActivate - Activates a beacon. A beacon that is active will return information and attachment data when queried via `beaconinfo.getforobserved`. Calling this method on an already active beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsActivate(req: operations.ProximitybeaconBeaconsActivateRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsActivateResponse>;
    /**
     * proximitybeaconBeaconsAttachmentsBatchDelete - Deletes multiple attachments on a given beacon. This operation is permanent and cannot be undone. You can optionally specify `namespacedType` to choose which attachments should be deleted. If you do not specify `namespacedType`, all your attachments on the given beacon will be deleted. You also may explicitly specify `* /*` to delete all. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsAttachmentsBatchDelete(req: operations.ProximitybeaconBeaconsAttachmentsBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsAttachmentsBatchDeleteResponse>;
    /**
     * proximitybeaconBeaconsAttachmentsCreate - Associates the given data with the specified beacon. Attachment data must contain two parts: - A namespaced type. - The actual attachment data itself. The namespaced type consists of two parts, the namespace and the type. The namespace must be one of the values returned by the `namespaces` endpoint, while the type can be a string of any characters except for the forward slash (`/`) up to 100 characters in length. Attachment data can be up to 1024 bytes long. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsAttachmentsCreate(req: operations.ProximitybeaconBeaconsAttachmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsAttachmentsCreateResponse>;
    /**
     * proximitybeaconBeaconsAttachmentsDelete - Deletes the specified attachment for the given beacon. Each attachment has a unique attachment name (`attachmentName`) which is returned when you fetch the attachment data via this API. You specify this with the delete request to control which attachment is removed. This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsAttachmentsDelete(req: operations.ProximitybeaconBeaconsAttachmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsAttachmentsDeleteResponse>;
    /**
     * proximitybeaconBeaconsAttachmentsList - Returns the attachments for the specified beacon that match the specified namespaced-type pattern. To control which namespaced types are returned, you add the `namespacedType` query parameter to the request. You must either use `* /*`, to return all attachments, or the namespace must be one of the ones returned from the `namespaces` endpoint. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsAttachmentsList(req: operations.ProximitybeaconBeaconsAttachmentsListRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsAttachmentsListResponse>;
    /**
     * proximitybeaconBeaconsDeactivate - Deactivates a beacon. Once deactivated, the API will not return information nor attachment data for the beacon when queried via `beaconinfo.getforobserved`. Calling this method on an already inactive beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsDeactivate(req: operations.ProximitybeaconBeaconsDeactivateRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsDeactivateResponse>;
    /**
     * proximitybeaconBeaconsDecommission - Decommissions the specified beacon in the service. This beacon will no longer be returned from `beaconinfo.getforobserved`. This operation is permanent -- you will not be able to re-register a beacon with this ID again. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsDecommission(req: operations.ProximitybeaconBeaconsDecommissionRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsDecommissionResponse>;
    /**
     * proximitybeaconBeaconsDelete - Deletes the specified beacon including all diagnostics data for the beacon as well as any attachments on the beacon (including those belonging to other projects). This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsDelete(req: operations.ProximitybeaconBeaconsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsDeleteResponse>;
    /**
     * proximitybeaconBeaconsDiagnosticsList - List the diagnostics for a single beacon. You can also list diagnostics for all the beacons owned by your Google Developers Console project by using the beacon name `beacons/-`. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsDiagnosticsList(req: operations.ProximitybeaconBeaconsDiagnosticsListRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsDiagnosticsListResponse>;
    /**
     * proximitybeaconBeaconsGet - Returns detailed information about the specified beacon. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project. Requests may supply an Eddystone-EID beacon name in the form: `beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID broadcast by the beacon. The returned `Beacon` object will contain the beacon's stable Eddystone-UID. Clients not authorized to resolve the beacon's ephemeral Eddystone-EID broadcast will receive an error.
    **/
    proximitybeaconBeaconsGet(req: operations.ProximitybeaconBeaconsGetRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsGetResponse>;
    /**
     * proximitybeaconBeaconsList - Searches the beacon registry for beacons that match the given search criteria. Only those beacons that the client has permission to list will be returned. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsList(req: operations.ProximitybeaconBeaconsListRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsListResponse>;
    /**
     * proximitybeaconBeaconsRegister - Registers a previously unregistered beacon given its `advertisedId`. These IDs are unique within the system. An ID can be registered only once. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsRegister(req: operations.ProximitybeaconBeaconsRegisterRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsRegisterResponse>;
    /**
     * proximitybeaconBeaconsUpdate - Updates the information about the specified beacon. **Any field that you do not populate in the submitted beacon will be permanently erased**, so you should follow the "read, modify, write" pattern to avoid inadvertently destroying data. Changes to the beacon status via this method will be silently ignored. To update beacon status, use the separate methods on this API for activation, deactivation, and decommissioning. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconBeaconsUpdate(req: operations.ProximitybeaconBeaconsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconsUpdateResponse>;
}
