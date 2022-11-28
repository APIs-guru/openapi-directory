import { AxiosInstance } from "axios";
import { Media } from "./media";
import { Spaces } from "./spaces";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://chat.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    media: Media;
    spaces: Spaces;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
