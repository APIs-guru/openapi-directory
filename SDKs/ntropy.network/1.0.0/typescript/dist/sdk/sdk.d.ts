import { AxiosInstance } from "axios";
import { Batch } from "./batch";
import { Batch1 } from "./batch1";
import { Business } from "./business";
import { Classifier } from "./classifier";
import { Consumer } from "./consumer";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.ntropy.network"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    batch: Batch;
    batch1: Batch1;
    business: Business;
    classifier: Classifier;
    consumer: Consumer;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
