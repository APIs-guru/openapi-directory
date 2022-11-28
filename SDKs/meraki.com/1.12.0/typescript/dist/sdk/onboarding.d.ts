import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Onboarding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationCameraOnboardingStatuses - Fetch onboarding status of cameras
     *
     * Fetch onboarding status of cameras
    **/
    getOrganizationCameraOnboardingStatuses(req: operations.GetOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraOnboardingStatusesResponse>;
    /**
     * updateOrganizationCameraOnboardingStatuses - Notify that credential handoff to camera has completed
     *
     * Notify that credential handoff to camera has completed
    **/
    updateOrganizationCameraOnboardingStatuses(req: operations.UpdateOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationCameraOnboardingStatusesResponse>;
}
