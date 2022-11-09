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
    ServicecontrolServicesAllocateQuota(req: operations.ServicecontrolServicesAllocateQuotaRequest, config?: AxiosRequestConfig): Promise<operations.ServicecontrolServicesAllocateQuotaResponse>;
    ServicecontrolServicesCheck(req: operations.ServicecontrolServicesCheckRequest, config?: AxiosRequestConfig): Promise<operations.ServicecontrolServicesCheckResponse>;
    ServicecontrolServicesReport(req: operations.ServicecontrolServicesReportRequest, config?: AxiosRequestConfig): Promise<operations.ServicecontrolServicesReportResponse>;
}
export {};
