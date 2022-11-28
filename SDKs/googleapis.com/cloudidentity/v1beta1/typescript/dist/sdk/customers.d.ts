import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudidentityCustomersUserinvitationsCancel - Cancels a UserInvitation that was already sent.
    **/
    cloudidentityCustomersUserinvitationsCancel(req: operations.CloudidentityCustomersUserinvitationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityCustomersUserinvitationsCancelResponse>;
    /**
     * cloudidentityCustomersUserinvitationsIsInvitableUser - Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.
    **/
    cloudidentityCustomersUserinvitationsIsInvitableUser(req: operations.CloudidentityCustomersUserinvitationsIsInvitableUserRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityCustomersUserinvitationsIsInvitableUserResponse>;
    /**
     * cloudidentityCustomersUserinvitationsList - Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.
    **/
    cloudidentityCustomersUserinvitationsList(req: operations.CloudidentityCustomersUserinvitationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityCustomersUserinvitationsListResponse>;
    /**
     * cloudidentityCustomersUserinvitationsSend - Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.
    **/
    cloudidentityCustomersUserinvitationsSend(req: operations.CloudidentityCustomersUserinvitationsSendRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityCustomersUserinvitationsSendResponse>;
}
