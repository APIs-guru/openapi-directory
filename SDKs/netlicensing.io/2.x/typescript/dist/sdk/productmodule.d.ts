import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProductModule {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createProductModule - Create Product Module
     *
     * Creates a new Product Module
    **/
    createProductModule(req: operations.CreateProductModuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductModuleResponse>;
    /**
     * deleteProductModule - Delete Product Module
     *
     * Delete a Product Module by 'number'
    **/
    deleteProductModule(req: operations.DeleteProductModuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductModuleResponse>;
    /**
     * getProductModule - Get Product Module
     *
     * Return a Product Module by 'productModuleNumber'
    **/
    getProductModule(req: operations.GetProductModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetProductModuleResponse>;
    /**
     * listProductModules - List Product Modules
     *
     * Return a list of all Product Modules for the current Vendor
    **/
    listProductModules(req: operations.ListProductModulesRequest, config?: AxiosRequestConfig): Promise<operations.ListProductModulesResponse>;
    /**
     * updateProductModule - Update Product Module
     *
     * Sets the provided properties to a Product Module. Return an updated Product Module
    **/
    updateProductModule(req: operations.UpdateProductModuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductModuleResponse>;
}
