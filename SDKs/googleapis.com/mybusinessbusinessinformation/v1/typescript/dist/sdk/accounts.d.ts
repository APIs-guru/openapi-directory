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
     * mybusinessbusinessinformationAccountsLocationsCreate - Creates a new Location that will be owned by the logged in user.
    **/
    mybusinessbusinessinformationAccountsLocationsCreate(req: operations.MybusinessbusinessinformationAccountsLocationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationAccountsLocationsCreateResponse>;
    /**
     * mybusinessbusinessinformationAccountsLocationsList - Lists the locations for the specified account.
    **/
    mybusinessbusinessinformationAccountsLocationsList(req: operations.MybusinessbusinessinformationAccountsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationAccountsLocationsListResponse>;
}
