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
     * contentAccountsAuthinfo - Returns information about the authenticated user.
    **/
    contentAccountsAuthinfo(req: operations.ContentAccountsAuthinfoRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsAuthinfoResponse>;
    /**
     * contentAccountsClaimwebsite - Claims the website of a Merchant Center sub-account.
    **/
    contentAccountsClaimwebsite(req: operations.ContentAccountsClaimwebsiteRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsClaimwebsiteResponse>;
    /**
     * contentAccountsCredentialsCreate - Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
    **/
    contentAccountsCredentialsCreate(req: operations.ContentAccountsCredentialsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsCredentialsCreateResponse>;
    /**
     * contentAccountsCustombatch - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
    **/
    contentAccountsCustombatch(req: operations.ContentAccountsCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsCustombatchResponse>;
    /**
     * contentAccountsDelete - Deletes a Merchant Center sub-account.
    **/
    contentAccountsDelete(req: operations.ContentAccountsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsDeleteResponse>;
    /**
     * contentAccountsGet - Retrieves a Merchant Center account.
    **/
    contentAccountsGet(req: operations.ContentAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsGetResponse>;
    /**
     * contentAccountsInsert - Creates a Merchant Center sub-account.
    **/
    contentAccountsInsert(req: operations.ContentAccountsInsertRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsInsertResponse>;
    /**
     * contentAccountsLabelsCreate - Creates a new label, not assigned to any account.
    **/
    contentAccountsLabelsCreate(req: operations.ContentAccountsLabelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLabelsCreateResponse>;
    /**
     * contentAccountsLabelsDelete - Deletes a label and removes it from all accounts to which it was assigned.
    **/
    contentAccountsLabelsDelete(req: operations.ContentAccountsLabelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLabelsDeleteResponse>;
    /**
     * contentAccountsLabelsList - Lists the labels assigned to an account.
    **/
    contentAccountsLabelsList(req: operations.ContentAccountsLabelsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLabelsListResponse>;
    /**
     * contentAccountsLabelsPatch - Updates a label.
    **/
    contentAccountsLabelsPatch(req: operations.ContentAccountsLabelsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLabelsPatchResponse>;
    /**
     * contentAccountsLink - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
    **/
    contentAccountsLink(req: operations.ContentAccountsLinkRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLinkResponse>;
    /**
     * contentAccountsList - Lists the sub-accounts in your Merchant Center account.
    **/
    contentAccountsList(req: operations.ContentAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsListResponse>;
    /**
     * contentAccountsListlinks - Returns the list of accounts linked to your Merchant Center account.
    **/
    contentAccountsListlinks(req: operations.ContentAccountsListlinksRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsListlinksResponse>;
    /**
     * contentAccountsRequestphoneverification - Request verification code to start phone verification.
    **/
    contentAccountsRequestphoneverification(req: operations.ContentAccountsRequestphoneverificationRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsRequestphoneverificationResponse>;
    /**
     * contentAccountsReturncarrierCreate - Links return carrier to a merchant account.
    **/
    contentAccountsReturncarrierCreate(req: operations.ContentAccountsReturncarrierCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsReturncarrierCreateResponse>;
    /**
     * contentAccountsReturncarrierDelete - Delete a return carrier in the merchant account.
    **/
    contentAccountsReturncarrierDelete(req: operations.ContentAccountsReturncarrierDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsReturncarrierDeleteResponse>;
    /**
     * contentAccountsReturncarrierList - Lists available return carriers in the merchant account.
    **/
    contentAccountsReturncarrierList(req: operations.ContentAccountsReturncarrierListRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsReturncarrierListResponse>;
    /**
     * contentAccountsReturncarrierPatch - Updates a return carrier in the merchant account.
    **/
    contentAccountsReturncarrierPatch(req: operations.ContentAccountsReturncarrierPatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsReturncarrierPatchResponse>;
    /**
     * contentAccountsUpdate - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
    **/
    contentAccountsUpdate(req: operations.ContentAccountsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsUpdateResponse>;
    /**
     * contentAccountsUpdatelabels - Updates labels that are assigned to the Merchant Center account by CSS user.
    **/
    contentAccountsUpdatelabels(req: operations.ContentAccountsUpdatelabelsRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsUpdatelabelsResponse>;
    /**
     * contentAccountsVerifyphonenumber - Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.
    **/
    contentAccountsVerifyphonenumber(req: operations.ContentAccountsVerifyphonenumberRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsVerifyphonenumberResponse>;
}
