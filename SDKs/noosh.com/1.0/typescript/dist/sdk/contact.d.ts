import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Contact {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBillingRecipients - List Billing Recipients
     *
     * List Billing Recipients
    **/
    getBillingRecipients(req: operations.GetBillingRecipientsRequest, config?: AxiosRequestConfig): Promise<operations.GetBillingRecipientsResponse>;
    /**
     * getContactList - List the contacts
     *
     * List the contacts
    **/
    getContactList(req: operations.GetContactListRequest, config?: AxiosRequestConfig): Promise<operations.GetContactListResponse>;
    /**
     * getContactUserInfo - Contact Info
     *
     * Contact Info
    **/
    getContactUserInfo(req: operations.GetContactUserInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetContactUserInfoResponse>;
}
