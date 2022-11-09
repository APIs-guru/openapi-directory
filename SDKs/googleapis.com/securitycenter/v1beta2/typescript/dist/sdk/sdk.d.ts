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
    SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettings(req: operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse>;
    SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings(req: operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse>;
    SecuritycenterProjectsWebSecurityScannerSettingsCalculate(req: operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse>;
}
export {};
