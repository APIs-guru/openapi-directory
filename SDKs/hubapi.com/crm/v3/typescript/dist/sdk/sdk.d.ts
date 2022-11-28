import { AxiosInstance } from "axios";
import { Cards } from "./cards";
import { SampleResponse } from "./sampleresponse";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.hubapi.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    cards: Cards;
    sampleResponse: SampleResponse;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
