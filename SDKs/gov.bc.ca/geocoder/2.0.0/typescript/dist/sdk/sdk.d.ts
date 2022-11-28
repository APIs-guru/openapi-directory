import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Intersections } from "./intersections";
import { Occupants } from "./occupants";
import { Parcels } from "./parcels";
import { Sites } from "./sites";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://geocoder.api.gov.bc.ca/", "https://geocodertst.api.gov.bc.ca/", "https://geocoderdlv.api.gov.bc.ca/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    intersections: Intersections;
    occupants: Occupants;
    parcels: Parcels;
    sites: Sites;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
