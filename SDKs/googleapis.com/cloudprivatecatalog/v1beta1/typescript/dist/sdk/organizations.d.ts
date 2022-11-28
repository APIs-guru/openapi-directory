import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudprivatecatalogOrganizationsCatalogsSearch - Search Catalog resources that consumers have access to, within the
     * scope of the consumer cloud resource hierarchy context.
    **/
    cloudprivatecatalogOrganizationsCatalogsSearch(req: operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogOrganizationsCatalogsSearchResponse>;
    /**
     * cloudprivatecatalogOrganizationsProductsSearch - Search Product resources that consumers have access to, within the
     * scope of the consumer cloud resource hierarchy context.
    **/
    cloudprivatecatalogOrganizationsProductsSearch(req: operations.CloudprivatecatalogOrganizationsProductsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogOrganizationsProductsSearchResponse>;
    /**
     * cloudprivatecatalogOrganizationsVersionsSearch - Search Version resources that consumers have access to, within the
     * scope of the consumer cloud resource hierarchy context.
    **/
    cloudprivatecatalogOrganizationsVersionsSearch(req: operations.CloudprivatecatalogOrganizationsVersionsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogOrganizationsVersionsSearchResponse>;
}
