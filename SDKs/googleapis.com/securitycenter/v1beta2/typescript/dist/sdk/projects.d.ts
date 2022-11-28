import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings - Get the ContainerThreatDetectionSettings resource.
    **/
    securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings(req: operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse>;
    /**
     * securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings - Update the ContainerThreatDetectionSettings resource.
    **/
    securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings(req: operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse>;
    /**
     * securitycenterProjectsWebSecurityScannerSettingsCalculate - Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings.
    **/
    securitycenterProjectsWebSecurityScannerSettingsCalculate(req: operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse>;
}
