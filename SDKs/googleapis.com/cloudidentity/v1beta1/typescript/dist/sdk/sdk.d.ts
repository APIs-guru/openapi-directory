import { AxiosInstance } from "axios";
import { Customers } from "./customers";
import { Devices } from "./devices";
import { Groups } from "./groups";
import { InboundSamlSsoProfiles } from "./inboundsamlssoprofiles";
import { InboundSsoAssignments } from "./inboundssoassignments";
import { OrgUnits } from "./orgunits";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cloudidentity.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    customers: Customers;
    devices: Devices;
    groups: Groups;
    inboundSamlSsoProfiles: InboundSamlSsoProfiles;
    inboundSsoAssignments: InboundSsoAssignments;
    orgUnits: OrgUnits;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
