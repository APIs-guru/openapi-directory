import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1beta1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * proximitybeaconGetEidparams - Gets the Proximity Beacon API's current public key and associated parameters used to initiate the Diffie-Hellman key exchange required to register a beacon that broadcasts the Eddystone-EID format. This key changes periodically; clients may cache it and re-use the same public key to provision and register multiple beacons. However, clients should be prepared to refresh this key when they encounter an error registering an Eddystone-EID beacon.
    **/
    proximitybeaconGetEidparams(req: operations.ProximitybeaconGetEidparamsRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconGetEidparamsResponse>;
}
