import { AxiosInstance } from "axios";
import { Hackathons } from "./hackathons";
import { SwaggerDoc } from "./swaggerdoc";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://www.hackathonwatch.com/api/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    hackathons: Hackathons;
    swaggerDoc: SwaggerDoc;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
