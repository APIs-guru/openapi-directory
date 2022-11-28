import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Contacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mirrorContactsDelete - Deletes a contact.
    **/
    mirrorContactsDelete(req: operations.MirrorContactsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MirrorContactsDeleteResponse>;
    /**
     * mirrorContactsGet - Gets a single contact by ID.
    **/
    mirrorContactsGet(req: operations.MirrorContactsGetRequest, config?: AxiosRequestConfig): Promise<operations.MirrorContactsGetResponse>;
    /**
     * mirrorContactsInsert - Inserts a new contact.
    **/
    mirrorContactsInsert(req: operations.MirrorContactsInsertRequest, config?: AxiosRequestConfig): Promise<operations.MirrorContactsInsertResponse>;
    /**
     * mirrorContactsList - Retrieves a list of contacts for the authenticated user.
    **/
    mirrorContactsList(req: operations.MirrorContactsListRequest, config?: AxiosRequestConfig): Promise<operations.MirrorContactsListResponse>;
    /**
     * mirrorContactsPatch - Updates a contact in place. This method supports patch semantics.
    **/
    mirrorContactsPatch(req: operations.MirrorContactsPatchRequest, config?: AxiosRequestConfig): Promise<operations.MirrorContactsPatchResponse>;
    /**
     * mirrorContactsUpdate - Updates a contact in place.
    **/
    mirrorContactsUpdate(req: operations.MirrorContactsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MirrorContactsUpdateResponse>;
}
