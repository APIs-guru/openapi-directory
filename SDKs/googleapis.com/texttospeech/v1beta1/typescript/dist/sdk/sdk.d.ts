import { AxiosInstance } from "axios";
import { Text } from "./text";
import { Voices } from "./voices";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://texttospeech.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    text: Text;
    voices: Voices;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
