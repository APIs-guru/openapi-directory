import { AxiosInstance } from "axios";
import { Jobs } from "./jobs";
import { Media } from "./media";
import { ReportTypes } from "./reporttypes";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://youtubereporting.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    jobs: Jobs;
    media: Media;
    reportTypes: ReportTypes;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
