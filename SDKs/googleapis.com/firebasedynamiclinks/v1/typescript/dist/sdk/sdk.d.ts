import { AxiosInstance } from "axios";
import { ManagedShortLinks } from "./managedshortlinks";
import { ShortLinks } from "./shortlinks";
import { V1 } from "./v1";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://firebasedynamiclinks.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    managedShortLinks: ManagedShortLinks;
    shortLinks: ShortLinks;
    v1: V1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
