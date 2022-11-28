import { AxiosInstance } from "axios";
import { Detections } from "./detections";
import { Languages } from "./languages";
import { Translations } from "./translations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://translation.googleapis.com/language/translate"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    detections: Detections;
    languages: Languages;
    translations: Translations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
