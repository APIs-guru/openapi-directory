import { AxiosInstance } from "axios";
import { ApplicationDetailService } from "./applicationdetailservice";
import { Projects } from "./projects";
import { TestEnvironmentCatalog } from "./testenvironmentcatalog";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://testing.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    applicationDetailService: ApplicationDetailService;
    projects: Projects;
    testEnvironmentCatalog: TestEnvironmentCatalog;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
