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
     * cloudfunctionsProjectsLocationsFunctionsCreate - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
    **/
    cloudfunctionsProjectsLocationsFunctionsCreate(req: operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsCreateResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsDelete - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
    **/
    cloudfunctionsProjectsLocationsFunctionsDelete(req: operations.CloudfunctionsProjectsLocationsFunctionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsDeleteResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
    **/
    cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl(req: operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
    **/
    cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl(req: operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
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
     * cloudfunctionsProjectsLocationsFunctionsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    cloudfunctionsProjectsLocationsFunctionsSetIamPolicy(req: operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse>;
    /**
     * cloudfunctionsProjectsLocationsFunctionsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    cloudfunctionsProjectsLocationsFunctionsTestIamPermissions(req: operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsResponse>;
    /**
     * cloudfunctionsProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    cloudfunctionsProjectsLocationsList(req: operations.CloudfunctionsProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsListResponse>;
    /**
     * cloudfunctionsProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    cloudfunctionsProjectsLocationsOperationsGet(req: operations.CloudfunctionsProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsOperationsGetResponse>;
    /**
     * cloudfunctionsProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    cloudfunctionsProjectsLocationsOperationsList(req: operations.CloudfunctionsProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsOperationsListResponse>;
    /**
     * cloudfunctionsProjectsLocationsRuntimesList - Returns a list of runtimes that are supported for the requested project.
    **/
    cloudfunctionsProjectsLocationsRuntimesList(req: operations.CloudfunctionsProjectsLocationsRuntimesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudfunctionsProjectsLocationsRuntimesListResponse>;
}
