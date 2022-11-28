import { AxiosInstance } from "axios";
import { Beaconinfo } from "./beaconinfo";
import { Beacons } from "./beacons";
import { Namespaces } from "./namespaces";
import { V1beta1 } from "./v1beta1";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://proximitybeacon.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    beaconinfo: Beaconinfo;
    beacons: Beacons;
    namespaces: Namespaces;
    v1beta1: V1beta1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
