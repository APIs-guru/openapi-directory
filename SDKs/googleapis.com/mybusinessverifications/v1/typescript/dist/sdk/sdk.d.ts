import { AxiosInstance } from "axios";
import { Locations } from "./locations";
import { VerificationTokens } from "./verificationtokens";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://mybusinessverifications.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    locations: Locations;
    verificationTokens: VerificationTokens;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
