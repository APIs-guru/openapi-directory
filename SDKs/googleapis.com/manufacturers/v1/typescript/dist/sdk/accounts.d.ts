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
     * manufacturersAccountsProductsDelete - Deletes the product from a Manufacturer Center account.
    **/
    manufacturersAccountsProductsDelete(req: operations.ManufacturersAccountsProductsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsProductsDeleteResponse>;
    /**
     * manufacturersAccountsProductsGet - Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
    **/
    manufacturersAccountsProductsGet(req: operations.ManufacturersAccountsProductsGetRequest, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsProductsGetResponse>;
    /**
     * manufacturersAccountsProductsList - Lists all the products in a Manufacturer Center account.
    **/
    manufacturersAccountsProductsList(req: operations.ManufacturersAccountsProductsListRequest, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsProductsListResponse>;
    /**
     * manufacturersAccountsProductsUpdate - Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.
    **/
    manufacturersAccountsProductsUpdate(req: operations.ManufacturersAccountsProductsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsProductsUpdateResponse>;
}
