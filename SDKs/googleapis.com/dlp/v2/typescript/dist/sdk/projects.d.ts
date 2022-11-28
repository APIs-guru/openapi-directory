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
     * dlpProjectsLocationsContentDeidentify - De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
    **/
    dlpProjectsLocationsContentDeidentify(req: operations.DlpProjectsLocationsContentDeidentifyRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsContentDeidentifyResponse>;
    /**
     * dlpProjectsLocationsContentInspect - Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,
    **/
    dlpProjectsLocationsContentInspect(req: operations.DlpProjectsLocationsContentInspectRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsContentInspectResponse>;
    /**
     * dlpProjectsLocationsContentReidentify - Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
    **/
    dlpProjectsLocationsContentReidentify(req: operations.DlpProjectsLocationsContentReidentifyRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsContentReidentifyResponse>;
    /**
     * dlpProjectsLocationsDeidentifyTemplatesCreate - Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
    **/
    dlpProjectsLocationsDeidentifyTemplatesCreate(req: operations.DlpProjectsLocationsDeidentifyTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsDeidentifyTemplatesCreateResponse>;
    /**
     * dlpProjectsLocationsDeidentifyTemplatesList - Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
    **/
    dlpProjectsLocationsDeidentifyTemplatesList(req: operations.DlpProjectsLocationsDeidentifyTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsDeidentifyTemplatesListResponse>;
    /**
     * dlpProjectsLocationsDlpJobsCancel - Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
    **/
    dlpProjectsLocationsDlpJobsCancel(req: operations.DlpProjectsLocationsDlpJobsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsDlpJobsCancelResponse>;
    /**
     * dlpProjectsLocationsDlpJobsCreate - Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
    **/
    dlpProjectsLocationsDlpJobsCreate(req: operations.DlpProjectsLocationsDlpJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsDlpJobsCreateResponse>;
    /**
     * dlpProjectsLocationsDlpJobsFinish - Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.
    **/
    dlpProjectsLocationsDlpJobsFinish(req: operations.DlpProjectsLocationsDlpJobsFinishRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsDlpJobsFinishResponse>;
    /**
     * dlpProjectsLocationsDlpJobsList - Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
    **/
    dlpProjectsLocationsDlpJobsList(req: operations.DlpProjectsLocationsDlpJobsListRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsDlpJobsListResponse>;
    /**
     * dlpProjectsLocationsImageRedact - Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
    **/
    dlpProjectsLocationsImageRedact(req: operations.DlpProjectsLocationsImageRedactRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsImageRedactResponse>;
    /**
     * dlpProjectsLocationsInspectTemplatesCreate - Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
    **/
    dlpProjectsLocationsInspectTemplatesCreate(req: operations.DlpProjectsLocationsInspectTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsInspectTemplatesCreateResponse>;
    /**
     * dlpProjectsLocationsInspectTemplatesList - Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
    **/
    dlpProjectsLocationsInspectTemplatesList(req: operations.DlpProjectsLocationsInspectTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsInspectTemplatesListResponse>;
    /**
     * dlpProjectsLocationsJobTriggersActivate - Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
    **/
    dlpProjectsLocationsJobTriggersActivate(req: operations.DlpProjectsLocationsJobTriggersActivateRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsJobTriggersActivateResponse>;
    /**
     * dlpProjectsLocationsJobTriggersCreate - Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
    **/
    dlpProjectsLocationsJobTriggersCreate(req: operations.DlpProjectsLocationsJobTriggersCreateRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsJobTriggersCreateResponse>;
    /**
     * dlpProjectsLocationsJobTriggersHybridInspect - Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.
    **/
    dlpProjectsLocationsJobTriggersHybridInspect(req: operations.DlpProjectsLocationsJobTriggersHybridInspectRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsJobTriggersHybridInspectResponse>;
    /**
     * dlpProjectsLocationsJobTriggersList - Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
    **/
    dlpProjectsLocationsJobTriggersList(req: operations.DlpProjectsLocationsJobTriggersListRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsLocationsJobTriggersListResponse>;
    /**
     * dlpProjectsStoredInfoTypesCreate - Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
    **/
    dlpProjectsStoredInfoTypesCreate(req: operations.DlpProjectsStoredInfoTypesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsStoredInfoTypesCreateResponse>;
    /**
     * dlpProjectsStoredInfoTypesDelete - Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
    **/
    dlpProjectsStoredInfoTypesDelete(req: operations.DlpProjectsStoredInfoTypesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsStoredInfoTypesDeleteResponse>;
    /**
     * dlpProjectsStoredInfoTypesGet - Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
    **/
    dlpProjectsStoredInfoTypesGet(req: operations.DlpProjectsStoredInfoTypesGetRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsStoredInfoTypesGetResponse>;
    /**
     * dlpProjectsStoredInfoTypesList - Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
    **/
    dlpProjectsStoredInfoTypesList(req: operations.DlpProjectsStoredInfoTypesListRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsStoredInfoTypesListResponse>;
    /**
     * dlpProjectsStoredInfoTypesPatch - Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
    **/
    dlpProjectsStoredInfoTypesPatch(req: operations.DlpProjectsStoredInfoTypesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DlpProjectsStoredInfoTypesPatchResponse>;
}
