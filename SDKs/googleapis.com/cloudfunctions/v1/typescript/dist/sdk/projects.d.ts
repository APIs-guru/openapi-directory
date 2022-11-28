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
     * cloudfunctionsProjectsLocationsFunctionsCall - Synchronously invokes a deployed Cloud Function. To be used for testing purposes as very limited traffic is allowed. For more information on the actual limits, refer to [Rate Limits](https://cloud.google.com/functions/quotas#rate_limits).
    **/
    cloudfunctionsProjectsLocationsFunctionsCall(req: operations.CloudfunctionsProjectsLocationsFunctionsCallRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsCallResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsCreate - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
    **/
    cloudfunctionsProjectsLocationsFunctionsCreate(req: operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsCreateResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsDelete - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
    **/
    cloudfunctionsProjectsLocationsFunctionsDelete(req: operations.CloudfunctionsProjectsLocationsFunctionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsDeleteResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within minutes after generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
    **/
    cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl(req: operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 100MB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,104857600` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
    **/
    cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl(req: operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsGet - Returns a function with the given name from the requested project.
    **/
    cloudfunctionsProjectsLocationsFunctionsGet(req: operations.CloudfunctionsProjectsLocationsFunctionsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsGetResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsGetIamPolicy - Gets the IAM access control policy for a function. Returns an empty policy if the function exists and does not have a policy set.
    **/
    cloudfunctionsProjectsLocationsFunctionsGetIamPolicy(req: operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsList - Returns a list of functions that belong to the requested project.
    **/
    cloudfunctionsProjectsLocationsFunctionsList(req: operations.CloudfunctionsProjectsLocationsFunctionsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsListResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsPatch - Updates existing function.
    **/
    cloudfunctionsProjectsLocationsFunctionsPatch(req: operations.CloudfunctionsProjectsLocationsFunctionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsPatchResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsSetIamPolicy - Sets the IAM access control policy on the specified function. Replaces any existing policy.
    **/
    cloudfunctionsProjectsLocationsFunctionsSetIamPolicy(req: operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsTestIamPermissions - Tests the specified permissions against the IAM access control policy for a function. If the function does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
    **/
    cloudfunctionsProjectsLocationsFunctionsTestIamPermissions(req: operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse>;
    /**
     * cloudfunctionsProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    cloudfunctionsProjectsLocationsList(req: operations.CloudfunctionsProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsListResponse>;
}
