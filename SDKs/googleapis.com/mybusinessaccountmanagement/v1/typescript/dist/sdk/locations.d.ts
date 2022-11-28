import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessaccountmanagementLocationsAdminsCreate - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
    **/
    mybusinessaccountmanagementLocationsAdminsCreate(req: operations.MybusinessaccountmanagementLocationsAdminsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementLocationsAdminsCreateResponse>;
    /**
     * mybusinessaccountmanagementLocationsAdminsDelete - Removes the specified admin as a manager of the specified location.
    **/
    mybusinessaccountmanagementLocationsAdminsDelete(req: operations.MybusinessaccountmanagementLocationsAdminsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementLocationsAdminsDeleteResponse>;
    /**
     * mybusinessaccountmanagementLocationsAdminsList - Lists all of the admins for the specified location.
    **/
    mybusinessaccountmanagementLocationsAdminsList(req: operations.MybusinessaccountmanagementLocationsAdminsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementLocationsAdminsListResponse>;
    /**
     * mybusinessaccountmanagementLocationsAdminsPatch - Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
    **/
    mybusinessaccountmanagementLocationsAdminsPatch(req: operations.MybusinessaccountmanagementLocationsAdminsPatchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementLocationsAdminsPatchResponse>;
    /**
     * mybusinessaccountmanagementLocationsTransfer - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.
    **/
    mybusinessaccountmanagementLocationsTransfer(req: operations.MybusinessaccountmanagementLocationsTransferRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementLocationsTransferResponse>;
}
