import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudsearchSettingsDatasourcesCreate - Creates a datasource. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsDatasourcesCreate(req: operations.CloudsearchSettingsDatasourcesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsDatasourcesCreateResponse>;
    /**
     * cloudsearchSettingsDatasourcesList - Lists datasources. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsDatasourcesList(req: operations.CloudsearchSettingsDatasourcesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsDatasourcesListResponse>;
    /**
     * cloudsearchSettingsGetCustomer - Get customer settings. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsGetCustomer(req: operations.CloudsearchSettingsGetCustomerRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsGetCustomerResponse>;
    /**
     * cloudsearchSettingsSearchapplicationsCreate - Creates a search application. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsSearchapplicationsCreate(req: operations.CloudsearchSettingsSearchapplicationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsCreateResponse>;
    /**
     * cloudsearchSettingsSearchapplicationsDelete - Deletes a search application. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsSearchapplicationsDelete(req: operations.CloudsearchSettingsSearchapplicationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsDeleteResponse>;
    /**
     * cloudsearchSettingsSearchapplicationsGet - Gets the specified search application. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsSearchapplicationsGet(req: operations.CloudsearchSettingsSearchapplicationsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsGetResponse>;
    /**
     * cloudsearchSettingsSearchapplicationsList - Lists all search applications. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsSearchapplicationsList(req: operations.CloudsearchSettingsSearchapplicationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsListResponse>;
    /**
     * cloudsearchSettingsSearchapplicationsPatch - Updates a search application. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsSearchapplicationsPatch(req: operations.CloudsearchSettingsSearchapplicationsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsPatchResponse>;
    /**
     * cloudsearchSettingsSearchapplicationsReset - Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsSearchapplicationsReset(req: operations.CloudsearchSettingsSearchapplicationsResetRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsResetResponse>;
    /**
     * cloudsearchSettingsSearchapplicationsUpdate - Updates a search application. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsSearchapplicationsUpdate(req: operations.CloudsearchSettingsSearchapplicationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsUpdateResponse>;
    /**
     * cloudsearchSettingsUpdateCustomer - Update customer settings. **Note:** This API requires an admin account to execute.
    **/
    cloudsearchSettingsUpdateCustomer(req: operations.CloudsearchSettingsUpdateCustomerRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsUpdateCustomerResponse>;
}
