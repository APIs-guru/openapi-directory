import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AttributeNamespaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAttributeNamespace - Delete an attribute namespace and all attributes below.
     *
     * Delete an attribute namespace and all attributes below.
     *
     * This operation is the same as the one defined with [DELETE /attribute/{namespace}/_meta](#/Attributes/delete_attribute__namespace___meta).
     *
    **/
    deleteAttributeNamespace(req: operations.DeleteAttributeNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributeNamespaceResponse>;
    /**
     * deleteAttributeNamespaceMeta - Delete an attribute namespace and all attributes below.
     *
     * Delete an attribute namespace and all attributes below.
     *
     * This operation is the same as the one defined with [DELETE /attribute/{namespace}](#/Attributes/delete_attribute__namespace_).
     *
    **/
    deleteAttributeNamespaceMeta(req: operations.DeleteAttributeNamespaceMetaRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributeNamespaceMetaResponse>;
    /**
     * getAttribute - List all attribute namespaces.
     *
     * List all attribute namespaces.
    **/
    getAttribute(req: operations.GetAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributeResponse>;
    /**
     * getAttributeNamespace - List all attributes below a namespace.
     *
     * List all attributes under a given attribute namespace.
    **/
    getAttributeNamespace(req: operations.GetAttributeNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributeNamespaceResponse>;
    /**
     * getAttributeNamespaceMeta - Show attribute namespace.
     *
     * Shows attribute namespace.
    **/
    getAttributeNamespaceMeta(req: operations.GetAttributeNamespaceMetaRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributeNamespaceMetaResponse>;
    /**
     * postAttributeNamespaceMeta - Change attribute namespace. Create an attribute namespace if it doesn't exist.
     *
     * This endpoint can be used for both, creating an attribute namespace and updating it:
     *   * If the attribute namespace passed as parameter doesn't exist, it will create the attribute namespace.
     *   * If the attribute namespace passed as parameter already exists, it will update the namespace attribute.
     *
     * This operation is the same as the one defined with [PUT](#/Attributes/put_attribute__namespace___meta).
     *
    **/
    postAttributeNamespaceMeta(req: operations.PostAttributeNamespaceMetaRequest, config?: AxiosRequestConfig): Promise<operations.PostAttributeNamespaceMetaResponse>;
    /**
     * putAttributeNamespaceMeta - Change attribute namespace. Create an attribute namespace if it doesn't exist.
     *
     * This endpoint can be used for both, creating an attribute namespace and updating it:
     *   * If the attribute namespace passed as parameter doesn't exist, it will create the attribute namespace.
     *   * If the attribute namespace passed as parameter already exists, it will update the namespace attribute.
     *
     * This operation is the same as the one defined with [POST](#/Attributes/post_attribute__namespace___meta).
     *
    **/
    putAttributeNamespaceMeta(req: operations.PutAttributeNamespaceMetaRequest, config?: AxiosRequestConfig): Promise<operations.PutAttributeNamespaceMetaResponse>;
}
