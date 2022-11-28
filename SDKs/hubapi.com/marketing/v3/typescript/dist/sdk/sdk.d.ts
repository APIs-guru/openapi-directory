import { AxiosInstance } from "axios";
import { AttendanceSubscriberStateChanges } from "./attendancesubscriberstatechanges";
import { MarketingEventsExternal } from "./marketingeventsexternal";
import { SettingsExternal } from "./settingsexternal";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.hubapi.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    attendanceSubscriberStateChanges: AttendanceSubscriberStateChanges;
    marketingEventsExternal: MarketingEventsExternal;
    settingsExternal: SettingsExternal;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
