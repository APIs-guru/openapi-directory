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
     * webriskProjectsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    webriskProjectsOperationsCancel(req: operations.WebriskProjectsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsOperationsCancelResponse>;
    /**
     * webriskProjectsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    webriskProjectsOperationsDelete(req: operations.WebriskProjectsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsOperationsDeleteResponse>;
    /**
     * webriskProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    webriskProjectsOperationsGet(req: operations.WebriskProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsOperationsGetResponse>;
    /**
     * webriskProjectsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    webriskProjectsOperationsList(req: operations.WebriskProjectsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsOperationsListResponse>;
    /**
     * webriskProjectsSubmissionsCreate - Creates a Submission of a URI suspected of containing phishing content to be reviewed. If the result verifies the existence of malicious phishing content, the site will be added to the [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future. Only allowlisted projects can use this method during Early Access. Please reach out to Sales or your customer engineer to obtain access.
    **/
    webriskProjectsSubmissionsCreate(req: operations.WebriskProjectsSubmissionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsSubmissionsCreateResponse>;
    /**
     * webriskProjectsUrisSubmit - Submits a URI suspected of containing malicious content to be reviewed. Returns a google.longrunning.Operation which, once the review is complete, is updated with its result. You can use the [Pub/Sub API] (https://cloud.google.com/pubsub) to receive notifications for the returned Operation. If the result verifies the existence of malicious content, the site will be added to the [Google's Social Engineering lists] (https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future. Only allowlisted projects can use this method during Early Access. Please reach out to Sales or your customer engineer to obtain access.
    **/
    webriskProjectsUrisSubmit(req: operations.WebriskProjectsUrisSubmitRequest, config?: AxiosRequestConfig): Promise<operations.WebriskProjectsUrisSubmitResponse>;
}
