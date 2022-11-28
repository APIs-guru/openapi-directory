import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * orgpolicyOrganizationsCustomConstraintsCreate - Creates a CustomConstraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
    **/
    orgpolicyOrganizationsCustomConstraintsCreate(req: operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyOrganizationsCustomConstraintsCreateResponse>;
    /**
     * orgpolicyOrganizationsCustomConstraintsList - Retrieves all of the `CustomConstraints` that exist on a particular organization resource.
    **/
    orgpolicyOrganizationsCustomConstraintsList(req: operations.OrgpolicyOrganizationsCustomConstraintsListRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyOrganizationsCustomConstraintsListResponse>;
}
