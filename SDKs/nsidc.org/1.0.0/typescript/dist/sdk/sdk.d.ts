import { AxiosInstance } from "axios";
import { SwaggerDocs } from "./swaggerdocs";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://nsidc.org/api/dataset/2"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    swaggerDocs: SwaggerDocs;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
