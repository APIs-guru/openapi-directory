import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AvailableProjects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * firebaseAvailableProjectsList - Lists each [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added to it. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added.
    **/
    firebaseAvailableProjectsList(req: operations.FirebaseAvailableProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseAvailableProjectsListResponse>;
}
