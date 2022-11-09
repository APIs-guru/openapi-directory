import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    DatastoreProjectsExport(req: operations.DatastoreProjectsExportRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsExportResponse>;
    DatastoreProjectsImport(req: operations.DatastoreProjectsImportRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsImportResponse>;
}
export {};
