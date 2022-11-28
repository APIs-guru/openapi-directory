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
     * recaptchaenterpriseProjectsAssessmentsAnnotate - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
    **/
    recaptchaenterpriseProjectsAssessmentsAnnotate(req: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse>;
    /**
     * recaptchaenterpriseProjectsAssessmentsCreate - Creates an Assessment of the likelihood an event is legitimate.
    **/
    recaptchaenterpriseProjectsAssessmentsCreate(req: operations.RecaptchaenterpriseProjectsAssessmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse>;
    /**
     * recaptchaenterpriseProjectsKeysCreate - Creates a new reCAPTCHA Enterprise key.
    **/
    recaptchaenterpriseProjectsKeysCreate(req: operations.RecaptchaenterpriseProjectsKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysCreateResponse>;
    /**
     * recaptchaenterpriseProjectsKeysDelete - Deletes the specified key.
    **/
    recaptchaenterpriseProjectsKeysDelete(req: operations.RecaptchaenterpriseProjectsKeysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysDeleteResponse>;
    /**
     * recaptchaenterpriseProjectsKeysGetMetrics - Get some aggregated metrics for a Key. This data can be used to build dashboards.
    **/
    recaptchaenterpriseProjectsKeysGetMetrics(req: operations.RecaptchaenterpriseProjectsKeysGetMetricsRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse>;
    /**
     * recaptchaenterpriseProjectsKeysList - Returns the list of all keys that belong to a project.
    **/
    recaptchaenterpriseProjectsKeysList(req: operations.RecaptchaenterpriseProjectsKeysListRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysListResponse>;
    /**
     * recaptchaenterpriseProjectsKeysMigrate - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
    **/
    recaptchaenterpriseProjectsKeysMigrate(req: operations.RecaptchaenterpriseProjectsKeysMigrateRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysMigrateResponse>;
    /**
     * recaptchaenterpriseProjectsKeysPatch - Updates the specified key.
    **/
    recaptchaenterpriseProjectsKeysPatch(req: operations.RecaptchaenterpriseProjectsKeysPatchRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysPatchResponse>;
    /**
     * recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
    **/
    recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey(req: operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse>;
    /**
     * recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch - Search group memberships related to a given account.
    **/
    recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch(req: operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse>;
    /**
     * recaptchaenterpriseProjectsRelatedaccountgroupsList - List groups of related accounts.
    **/
    recaptchaenterpriseProjectsRelatedaccountgroupsList(req: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse>;
    /**
     * recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList - Get memberships in a group of related accounts.
    **/
    recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList(req: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse>;
}
