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
     * transcoderProjectsLocationsJobTemplatesCreate - Creates a job template in the specified region.
    **/
    transcoderProjectsLocationsJobTemplatesCreate(req: operations.TranscoderProjectsLocationsJobTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesCreateResponse>;
    /**
     * transcoderProjectsLocationsJobTemplatesDelete - Deletes a job template.
    **/
    transcoderProjectsLocationsJobTemplatesDelete(req: operations.TranscoderProjectsLocationsJobTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesDeleteResponse>;
    /**
     * transcoderProjectsLocationsJobTemplatesGet - Returns the job template data.
    **/
    transcoderProjectsLocationsJobTemplatesGet(req: operations.TranscoderProjectsLocationsJobTemplatesGetRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesGetResponse>;
    /**
     * transcoderProjectsLocationsJobTemplatesList - Lists job templates in the specified region.
    **/
    transcoderProjectsLocationsJobTemplatesList(req: operations.TranscoderProjectsLocationsJobTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesListResponse>;
    /**
     * transcoderProjectsLocationsJobsCreate - Creates a job in the specified region.
    **/
    transcoderProjectsLocationsJobsCreate(req: operations.TranscoderProjectsLocationsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobsCreateResponse>;
    /**
     * transcoderProjectsLocationsJobsList - Lists jobs in the specified region.
    **/
    transcoderProjectsLocationsJobsList(req: operations.TranscoderProjectsLocationsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobsListResponse>;
}
