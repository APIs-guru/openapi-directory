import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessaccountmanagementAccountsCreate - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
    **/
    mybusinessaccountmanagementAccountsCreate(req: operations.MybusinessaccountmanagementAccountsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsCreateResponse>;
    /**
     * mybusinessaccountmanagementAccountsGet - Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
    **/
    mybusinessaccountmanagementAccountsGet(req: operations.MybusinessaccountmanagementAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsGetResponse>;
    /**
     * mybusinessaccountmanagementAccountsInvitationsAccept - Accepts the specified invitation.
    **/
    mybusinessaccountmanagementAccountsInvitationsAccept(req: operations.MybusinessaccountmanagementAccountsInvitationsAcceptRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsInvitationsAcceptResponse>;
    /**
     * mybusinessaccountmanagementAccountsInvitationsDecline - Declines the specified invitation.
    **/
    mybusinessaccountmanagementAccountsInvitationsDecline(req: operations.MybusinessaccountmanagementAccountsInvitationsDeclineRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsInvitationsDeclineResponse>;
    /**
     * mybusinessaccountmanagementAccountsInvitationsList - Lists pending invitations for the specified account.
    **/
    mybusinessaccountmanagementAccountsInvitationsList(req: operations.MybusinessaccountmanagementAccountsInvitationsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsInvitationsListResponse>;
    /**
     * mybusinessaccountmanagementAccountsList - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
    **/
    mybusinessaccountmanagementAccountsList(req: operations.MybusinessaccountmanagementAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsListResponse>;
}
