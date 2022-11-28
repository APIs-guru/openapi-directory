import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Attributes } from "./attributes";
import { Categories } from "./categories";
import { Chains } from "./chains";
import { GoogleLocations } from "./googlelocations";
import { Locations } from "./locations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://mybusinessbusinessinformation.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    accounts: Accounts;
    attributes: Attributes;
    categories: Categories;
    chains: Chains;
    googleLocations: GoogleLocations;
    locations: Locations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
