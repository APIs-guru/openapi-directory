import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Catalogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudprivatecatalogproducerCatalogsAssociationsCreate - Creates an Association instance under a given Catalog.
    **/
    cloudprivatecatalogproducerCatalogsAssociationsCreate(req: operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsAssociationsCreateResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsAssociationsList - Lists all Association resources under a catalog.
    **/
    cloudprivatecatalogproducerCatalogsAssociationsList(req: operations.CloudprivatecatalogproducerCatalogsAssociationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsAssociationsListResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsCreate - Creates a new Catalog resource.
    **/
    cloudprivatecatalogproducerCatalogsCreate(req: operations.CloudprivatecatalogproducerCatalogsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsCreateResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsGetIamPolicy - Gets IAM policy for the specified Catalog.
    **/
    cloudprivatecatalogproducerCatalogsGetIamPolicy(req: operations.CloudprivatecatalogproducerCatalogsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsGetIamPolicyResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsList - Lists Catalog resources that the producer has access to, within the
     * scope of the parent resource.
    **/
    cloudprivatecatalogproducerCatalogsList(req: operations.CloudprivatecatalogproducerCatalogsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsListResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsProductsCopy - Copies a Product under another Catalog.
    **/
    cloudprivatecatalogproducerCatalogsProductsCopy(req: operations.CloudprivatecatalogproducerCatalogsProductsCopyRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsCopyResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsProductsCreate - Creates a Product instance under a given Catalog.
    **/
    cloudprivatecatalogproducerCatalogsProductsCreate(req: operations.CloudprivatecatalogproducerCatalogsProductsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsCreateResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsProductsIconsUpload - Creates an Icon instance under a given Product.
     * If Product only has a default icon, a new Icon
     * instance is created and associated with the given Product.
     * If Product already has a non-default icon, the action creates
     * a new Icon instance, associates the newly created
     * Icon with the given Product and deletes the old icon.
    **/
    cloudprivatecatalogproducerCatalogsProductsIconsUpload(req: operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsProductsList - Lists Product resources that the producer has access to, within the
     * scope of the parent catalog.
    **/
    cloudprivatecatalogproducerCatalogsProductsList(req: operations.CloudprivatecatalogproducerCatalogsProductsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsListResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsProductsVersionsCreate - Creates a Version instance under a given Product.
    **/
    cloudprivatecatalogproducerCatalogsProductsVersionsCreate(req: operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsProductsVersionsDelete - Hard deletes a Version.
    **/
    cloudprivatecatalogproducerCatalogsProductsVersionsDelete(req: operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsProductsVersionsGet - Returns the requested Version resource.
    **/
    cloudprivatecatalogproducerCatalogsProductsVersionsGet(req: operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsProductsVersionsList - Lists Version resources that the producer has access to, within the
     * scope of the parent Product.
    **/
    cloudprivatecatalogproducerCatalogsProductsVersionsList(req: operations.CloudprivatecatalogproducerCatalogsProductsVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsVersionsListResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsProductsVersionsPatch - Updates a specific Version resource.
    **/
    cloudprivatecatalogproducerCatalogsProductsVersionsPatch(req: operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsSetIamPolicy - Sets the IAM policy for the specified Catalog.
    **/
    cloudprivatecatalogproducerCatalogsSetIamPolicy(req: operations.CloudprivatecatalogproducerCatalogsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsSetIamPolicyResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsTestIamPermissions - Tests the IAM permissions for the specified Catalog.
    **/
    cloudprivatecatalogproducerCatalogsTestIamPermissions(req: operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsResponse>;
    /**
     * cloudprivatecatalogproducerCatalogsUndelete - Undeletes a deleted Catalog and all resources under it.
    **/
    cloudprivatecatalogproducerCatalogsUndelete(req: operations.CloudprivatecatalogproducerCatalogsUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsUndeleteResponse>;
}
