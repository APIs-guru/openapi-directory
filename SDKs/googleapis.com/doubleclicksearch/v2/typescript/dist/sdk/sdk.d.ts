import { AxiosInstance } from "axios";
import { Conversion } from "./conversion";
import { Reports } from "./reports";
import { SavedColumns } from "./savedcolumns";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://doubleclicksearch.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    conversion: Conversion;
    reports: Reports;
    savedColumns: SavedColumns;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
