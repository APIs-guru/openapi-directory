import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Attributes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAttributeNamespaceAttributeName - Delete an attribute and all its values in projects or packages.
     *
     * Delete an attribute and all its values in projects or packages.
     *
     * This operation is the same as the one defined with [DELETE /attribute/{namespace}/{attribute_name}/_meta](#/Attributes/delete_attribute__namespace___attribute_name___meta)
     *
    **/
    deleteAttributeNamespaceAttributeName(req: operations.DeleteAttributeNamespaceAttributeNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributeNamespaceAttributeNameResponse>;
    /**
     * deleteAttributeNamespaceAttributeNameMeta - Delete an attribute and all its values in projects or packages.
     *
     * Delete an attribute and all its values in projects or packages.
     *
     * This operation is the same as the one defined with [DELETE /attribute/{namespace}/{attribute_name}](#/Attributes/delete_attribute__namespace___attribute_name_)
     *
    **/
    deleteAttributeNamespaceAttributeNameMeta(req: operations.DeleteAttributeNamespaceAttributeNameMetaRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributeNamespaceAttributeNameMetaResponse>;
    /**
     * getAttributeNamespaceAttributeNameMeta - Shows attribute.
     *
     * Shows attribute.
    **/
    getAttributeNamespaceAttributeNameMeta(req: operations.GetAttributeNamespaceAttributeNameMetaRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributeNamespaceAttributeNameMetaResponse>;
    /**
     * postAttributeNamespaceAttributeNameMeta - Change attribute data. Create an attribute if it doesn't exist.
     *
     * This endpoint can be used for both, creating an attribute and updating it:
     *   * If the attribute passed as parameter doesn't exist, it will create the attribute.
     *   * If the attribute passed as parameter already exists, it will update the attribute.
     *
     * This operation is the same as the one defined with [PUT](#/Attributes/put_attribute__namespace___attribute_name___meta).
     *
    **/
    postAttributeNamespaceAttributeNameMeta(req: operations.PostAttributeNamespaceAttributeNameMetaRequest, config?: AxiosRequestConfig): Promise<operations.PostAttributeNamespaceAttributeNameMetaResponse>;
    /**
     * putAttributeNamespaceAttributeNameMeta - Change attribute data. Create an attribute if it doesn't exist.
     *
     * This endpoint can be used for both, creating an attribute and updating it:
     *   * If the attribute passed as parameter doesn't exist, it will create the attribute.
     *   * If the attribute passed as parameter already exists, it will update the attribute.
     *
     * This operation is the same as the one defined with [POST](#/Attributes/post_attribute__namespace___attribute_name___meta).
     *
    **/
    putAttributeNamespaceAttributeNameMeta(req: operations.PutAttributeNamespaceAttributeNameMetaRequest, config?: AxiosRequestConfig): Promise<operations.PutAttributeNamespaceAttributeNameMetaResponse>;
}
