import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Product {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createProduct - Create Product
     *
     * Creates a new Product
    **/
    createProduct(req: operations.CreateProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * deleteProduct - Delete Product
     *
     * Delete a Product by 'number'
    **/
    deleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * listProducts - List Products
     *
     * Return a list of all configured Products for the current Vendor
    **/
    listProducts(req: operations.ListProductsRequest, config?: AxiosRequestConfig): Promise<operations.ListProductsResponse>;
    /**
     * productNumber - Get Product
     *
     * Return a Product by 'productNumber'
    **/
    productNumber(req: operations.ProductNumberRequest, config?: AxiosRequestConfig): Promise<operations.ProductNumberResponse>;
    /**
     * updateProduct - Update Product
     *
     * Sets the provided properties to a Product. Return an updated Product
    **/
    updateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
}
