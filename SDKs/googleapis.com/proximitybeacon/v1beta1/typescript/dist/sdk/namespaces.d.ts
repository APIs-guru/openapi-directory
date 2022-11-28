import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Namespaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * proximitybeaconNamespacesList - Lists all attachment namespaces owned by your Google Developers Console project. Attachment data associated with a beacon must include a namespaced type, and the namespace must be owned by your project. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
    **/
    proximitybeaconNamespacesList(req: operations.ProximitybeaconNamespacesListRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconNamespacesListResponse>;
    /**
     * proximitybeaconNamespacesUpdate - Updates the information about the specified namespace. Only the namespace visibility can be updated.
    **/
    proximitybeaconNamespacesUpdate(req: operations.ProximitybeaconNamespacesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconNamespacesUpdateResponse>;
}
