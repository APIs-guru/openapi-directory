import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InboundSsoAssignments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudidentityInboundSsoAssignmentsCreate - Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.
    **/
    cloudidentityInboundSsoAssignmentsCreate(req: operations.CloudidentityInboundSsoAssignmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSsoAssignmentsCreateResponse>;
    /**
     * cloudidentityInboundSsoAssignmentsDelete - Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.
    **/
    cloudidentityInboundSsoAssignmentsDelete(req: operations.CloudidentityInboundSsoAssignmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSsoAssignmentsDeleteResponse>;
    /**
     * cloudidentityInboundSsoAssignmentsGet - Gets an InboundSsoAssignment.
    **/
    cloudidentityInboundSsoAssignmentsGet(req: operations.CloudidentityInboundSsoAssignmentsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSsoAssignmentsGetResponse>;
    /**
     * cloudidentityInboundSsoAssignmentsList - Lists the InboundSsoAssignments for a `Customer`.
    **/
    cloudidentityInboundSsoAssignmentsList(req: operations.CloudidentityInboundSsoAssignmentsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSsoAssignmentsListResponse>;
    /**
     * cloudidentityInboundSsoAssignmentsPatch - Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1beta1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.
    **/
    cloudidentityInboundSsoAssignmentsPatch(req: operations.CloudidentityInboundSsoAssignmentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSsoAssignmentsPatchResponse>;
}
