import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Creates a new License
    **/
    CreateLicense(req: operations.CreateLicenseRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseResponse>;
    /**
     * Creates a new License Template
    **/
    CreateLicenseTemplate(req: operations.CreateLicenseTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseTemplateResponse>;
    /**
     * Creates a new Licensee
    **/
    CreateLicensee(req: operations.CreateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseeResponse>;
    /**
     * Creates a new Product
    **/
    CreateProduct(req: operations.CreateProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * Creates a new Product Module
    **/
    CreateProductModule(req: operations.CreateProductModuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductModuleResponse>;
    /**
     * Create token by 'tokenType' and additional token parameters
    **/
    CreateToken(req: operations.CreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * Creates a new Transaction
    **/
    CreateTransaction(req: operations.CreateTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CreateTransactionResponse>;
    /**
     * Delete License by a 'licenseNumber'
    **/
    DeleteLicense(req: operations.DeleteLicenseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseResponse>;
    /**
     * Delete a License Template by 'number'.
    **/
    DeleteLicenseTemplate(req: operations.DeleteLicenseTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseTemplateResponse>;
    /**
     * Delete a Licensee by 'number'
    **/
    DeleteLicensee(req: operations.DeleteLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseeResponse>;
    /**
     * Delete a Product by 'number'
    **/
    DeleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * Delete a Product Module by 'number'
    **/
    DeleteProductModule(req: operations.DeleteProductModuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductModuleResponse>;
    /**
     * Delete a token by 'number'
    **/
    DeleteToken(req: operations.DeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * Get License by a 'licenseNumber'
    **/
    GetLicense(req: operations.GetLicenseRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseResponse>;
    /**
     * Return a License Template by 'licenseTemplateNumber'
    **/
    GetLicenseTemplate(req: operations.GetLicenseTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseTemplateResponse>;
    /**
     * Return a Licensee by 'licenseeNumber'
    **/
    GetLicensee(req: operations.GetLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseeResponse>;
    /**
     * Return a Payment Method info by 'paymentMethodNumber'
    **/
    GetPaymentMethod(req: operations.GetPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodResponse>;
    /**
     * Return a Product Module by 'productModuleNumber'
    **/
    GetProductModule(req: operations.GetProductModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetProductModuleResponse>;
    /**
     * Return a token by 'tokenNumber'
    **/
    GetToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
    /**
     * Return a Transaction by 'transactionNumber'
    **/
    GetTransaction(req: operations.GetTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionResponse>;
    /**
     * Return a list of all License Types supported by the service
    **/
    LicenseTypes(req: operations.LicenseTypesRequest, config?: AxiosRequestConfig): Promise<operations.LicenseTypesResponse>;
    /**
     * Return a list of all licensing models supported by the service
    **/
    LicensingModels(req: operations.LicensingModelsRequest, config?: AxiosRequestConfig): Promise<operations.LicensingModelsResponse>;
    /**
     * Return a list of all License Templates for the current Vendor
    **/
    ListLicenseTemplates(req: operations.ListLicenseTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseTemplatesResponse>;
    /**
     * Return a list of all Licensees for the current Vendor
    **/
    ListLicensees(req: operations.ListLicenseesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseesResponse>;
    /**
     * Return a list of all Licenses for the current Vendor
    **/
    ListLicenses(req: operations.ListLicensesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicensesResponse>;
    /**
     * Return a list of all Payment Methods for the current Vendor
    **/
    ListPaymentMethods(req: operations.ListPaymentMethodsRequest, config?: AxiosRequestConfig): Promise<operations.ListPaymentMethodsResponse>;
    /**
     * Return a list of all Product Modules for the current Vendor
    **/
    ListProductModules(req: operations.ListProductModulesRequest, config?: AxiosRequestConfig): Promise<operations.ListProductModulesResponse>;
    /**
     * Return a list of all configured Products for the current Vendor
    **/
    ListProducts(req: operations.ListProductsRequest, config?: AxiosRequestConfig): Promise<operations.ListProductsResponse>;
    /**
     * Return a list of all tokens for the current Vendor
    **/
    ListTokens(req: operations.ListTokensRequest, config?: AxiosRequestConfig): Promise<operations.ListTokensResponse>;
    /**
     * Return a list of all Transactions for the current Vendor
    **/
    ListTransactions(req: operations.ListTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ListTransactionsResponse>;
    /**
     * Return a Product by 'productNumber'
    **/
    ProductNumber(req: operations.ProductNumberRequest, config?: AxiosRequestConfig): Promise<operations.ProductNumberResponse>;
    /**
     * Licenses transfer between Licensees
    **/
    TransferLicenses(req: operations.TransferLicensesRequest, config?: AxiosRequestConfig): Promise<operations.TransferLicensesResponse>;
    /**
     * Update License by a 'licenseNumber'
    **/
    UpdateLicense(req: operations.UpdateLicenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseResponse>;
    /**
     * Sets the provided properties to a License Template. Return an updated License Template
    **/
    UpdateLicenseTemplate(req: operations.UpdateLicenseTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseTemplateResponse>;
    /**
     * Sets the provided properties to a Licensee. Return an updated Licensee
    **/
    UpdateLicensee(req: operations.UpdateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseeResponse>;
    /**
     * Sets the provided properties to a Payment Method. Return an updated Payment Method
    **/
    UpdatePaymentMethod(req: operations.UpdatePaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentMethodResponse>;
    /**
     * Sets the provided properties to a Product. Return an updated Product
    **/
    UpdateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
    /**
     * Sets the provided properties to a Product Module. Return an updated Product Module
    **/
    UpdateProductModule(req: operations.UpdateProductModuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductModuleResponse>;
    /**
     * Sets the provided properties to a Transaction. Return an updated Transaction
    **/
    UpdateTransaction(req: operations.UpdateTransactionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTransactionResponse>;
    /**
     * Validates active Licenses of the Licensee
    **/
    ValidateLicensee(req: operations.ValidateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.ValidateLicenseeResponse>;
}
export {};
