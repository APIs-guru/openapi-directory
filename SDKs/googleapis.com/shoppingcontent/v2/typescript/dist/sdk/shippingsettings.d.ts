import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Shippingsettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentShippingsettingsCustombatch - Retrieves and updates the shipping settings of multiple accounts in a single request.
    **/
    contentShippingsettingsCustombatch(req: operations.ContentShippingsettingsCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsCustombatchResponse>;
    /**
     * contentShippingsettingsGet - Retrieves the shipping settings of the account.
    **/
    contentShippingsettingsGet(req: operations.ContentShippingsettingsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsGetResponse>;
    /**
     * contentShippingsettingsGetsupportedcarriers - Retrieves supported carriers and carrier services for an account.
    **/
    contentShippingsettingsGetsupportedcarriers(req: operations.ContentShippingsettingsGetsupportedcarriersRequest, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsGetsupportedcarriersResponse>;
    /**
     * contentShippingsettingsGetsupportedholidays - Retrieves supported holidays for an account.
    **/
    contentShippingsettingsGetsupportedholidays(req: operations.ContentShippingsettingsGetsupportedholidaysRequest, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsGetsupportedholidaysResponse>;
    /**
     * contentShippingsettingsGetsupportedpickupservices - Retrieves supported pickup services for an account.
    **/
    contentShippingsettingsGetsupportedpickupservices(req: operations.ContentShippingsettingsGetsupportedpickupservicesRequest, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsGetsupportedpickupservicesResponse>;
    /**
     * contentShippingsettingsList - Lists the shipping settings of the sub-accounts in your Merchant Center account.
    **/
    contentShippingsettingsList(req: operations.ContentShippingsettingsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsListResponse>;
    /**
     * contentShippingsettingsUpdate - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
    **/
    contentShippingsettingsUpdate(req: operations.ContentShippingsettingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsUpdateResponse>;
}
