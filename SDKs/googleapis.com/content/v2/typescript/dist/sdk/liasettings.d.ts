import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Liasettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentLiasettingsCustombatch - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
    **/
    contentLiasettingsCustombatch(req: operations.ContentLiasettingsCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsCustombatchResponse>;
    /**
     * contentLiasettingsGet - Retrieves the LIA settings of the account.
    **/
    contentLiasettingsGet(req: operations.ContentLiasettingsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsGetResponse>;
    /**
     * contentLiasettingsGetaccessiblegmbaccounts - Retrieves the list of accessible Google My Business accounts.
    **/
    contentLiasettingsGetaccessiblegmbaccounts(req: operations.ContentLiasettingsGetaccessiblegmbaccountsRequest, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsGetaccessiblegmbaccountsResponse>;
    /**
     * contentLiasettingsList - Lists the LIA settings of the sub-accounts in your Merchant Center account.
    **/
    contentLiasettingsList(req: operations.ContentLiasettingsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsListResponse>;
    /**
     * contentLiasettingsListposdataproviders - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
    **/
    contentLiasettingsListposdataproviders(req: operations.ContentLiasettingsListposdataprovidersRequest, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsListposdataprovidersResponse>;
    /**
     * contentLiasettingsRequestgmbaccess - Requests access to a specified Google My Business account.
    **/
    contentLiasettingsRequestgmbaccess(req: operations.ContentLiasettingsRequestgmbaccessRequest, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsRequestgmbaccessResponse>;
    /**
     * contentLiasettingsRequestinventoryverification - Requests inventory validation for the specified country.
    **/
    contentLiasettingsRequestinventoryverification(req: operations.ContentLiasettingsRequestinventoryverificationRequest, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsRequestinventoryverificationResponse>;
    /**
     * contentLiasettingsSetinventoryverificationcontact - Sets the inventory verification contract for the specified country.
    **/
    contentLiasettingsSetinventoryverificationcontact(req: operations.ContentLiasettingsSetinventoryverificationcontactRequest, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsSetinventoryverificationcontactResponse>;
    /**
     * contentLiasettingsSetposdataprovider - Sets the POS data provider for the specified country.
    **/
    contentLiasettingsSetposdataprovider(req: operations.ContentLiasettingsSetposdataproviderRequest, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsSetposdataproviderResponse>;
    /**
     * contentLiasettingsUpdate - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
    **/
    contentLiasettingsUpdate(req: operations.ContentLiasettingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsUpdateResponse>;
}
