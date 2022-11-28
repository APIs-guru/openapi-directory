import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://libretranslate.local"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getFrontendSettings - Retrieve frontend specific settings
    **/
    getFrontendSettings(config?: AxiosRequestConfig): Promise<operations.GetFrontendSettingsResponse>;
    /**
     * getLanguages - Retrieve list of supported languages
    **/
    getLanguages(config?: AxiosRequestConfig): Promise<operations.GetLanguagesResponse>;
    /**
     * postDetect - Detect the language of a single text
    **/
    postDetect(req: operations.PostDetectRequest, config?: AxiosRequestConfig): Promise<operations.PostDetectResponse>;
    /**
     * postLanguages - Retrieve list of supported languages
    **/
    postLanguages(config?: AxiosRequestConfig): Promise<operations.PostLanguagesResponse>;
    /**
     * postTranslate - Translate text from a language to another
    **/
    postTranslate(req: operations.PostTranslateRequest, config?: AxiosRequestConfig): Promise<operations.PostTranslateResponse>;
}
export {};
