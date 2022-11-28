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
     * essentialcontactsProjectsContactsCompute - Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
    **/
    essentialcontactsProjectsContactsCompute(req: operations.EssentialcontactsProjectsContactsComputeRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsComputeResponse>;
    /**
     * essentialcontactsProjectsContactsCreate - Adds a new contact for a resource.
    **/
    essentialcontactsProjectsContactsCreate(req: operations.EssentialcontactsProjectsContactsCreateRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsCreateResponse>;
    /**
     * essentialcontactsProjectsContactsDelete - Deletes a contact.
    **/
    essentialcontactsProjectsContactsDelete(req: operations.EssentialcontactsProjectsContactsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsDeleteResponse>;
    /**
     * essentialcontactsProjectsContactsGet - Gets a single contact.
    **/
    essentialcontactsProjectsContactsGet(req: operations.EssentialcontactsProjectsContactsGetRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsGetResponse>;
    /**
     * essentialcontactsProjectsContactsList - Lists the contacts that have been set on a resource.
    **/
    essentialcontactsProjectsContactsList(req: operations.EssentialcontactsProjectsContactsListRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsListResponse>;
    /**
     * essentialcontactsProjectsContactsPatch - Updates a contact. Note: A contact's email address cannot be changed.
    **/
    essentialcontactsProjectsContactsPatch(req: operations.EssentialcontactsProjectsContactsPatchRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsPatchResponse>;
    /**
     * essentialcontactsProjectsContactsSendTestMessage - Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
    **/
    essentialcontactsProjectsContactsSendTestMessage(req: operations.EssentialcontactsProjectsContactsSendTestMessageRequest, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsSendTestMessageResponse>;
}
