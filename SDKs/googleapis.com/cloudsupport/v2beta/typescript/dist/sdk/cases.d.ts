import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudsupportCasesAttachmentsList - Retrieve all attachments associated with a support case.
    **/
    cloudsupportCasesAttachmentsList(req: operations.CloudsupportCasesAttachmentsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesAttachmentsListResponse>;
    /**
     * cloudsupportCasesClose - Close the specified case.
    **/
    cloudsupportCasesClose(req: operations.CloudsupportCasesCloseRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesCloseResponse>;
    /**
     * cloudsupportCasesCommentsCreate - Add a new comment to the specified Case. The comment object must have the following fields set: body.
    **/
    cloudsupportCasesCommentsCreate(req: operations.CloudsupportCasesCommentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesCommentsCreateResponse>;
    /**
     * cloudsupportCasesCommentsList - Retrieve all Comments associated with the Case object.
    **/
    cloudsupportCasesCommentsList(req: operations.CloudsupportCasesCommentsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesCommentsListResponse>;
    /**
     * cloudsupportCasesCreate - Create a new case and associate it with the given Cloud resource. The case object must have the following fields set: display_name, description, classification, and severity.
    **/
    cloudsupportCasesCreate(req: operations.CloudsupportCasesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesCreateResponse>;
    /**
     * cloudsupportCasesEscalate - Escalate a case. Escalating a case will initiate the Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
    **/
    cloudsupportCasesEscalate(req: operations.CloudsupportCasesEscalateRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesEscalateResponse>;
    /**
     * cloudsupportCasesGet - Retrieve the specified case.
    **/
    cloudsupportCasesGet(req: operations.CloudsupportCasesGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesGetResponse>;
    /**
     * cloudsupportCasesList - Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.
    **/
    cloudsupportCasesList(req: operations.CloudsupportCasesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesListResponse>;
    /**
     * cloudsupportCasesPatch - Update the specified case. Only a subset of fields (display_name, description, time_zone, subscriber_email_addresses, related_resources, severity, priority, primary_contact, and labels) can be updated.
    **/
    cloudsupportCasesPatch(req: operations.CloudsupportCasesPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesPatchResponse>;
    /**
     * cloudsupportCasesSearch - Search cases using the specified query.
    **/
    cloudsupportCasesSearch(req: operations.CloudsupportCasesSearchRequest, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesSearchResponse>;
}
