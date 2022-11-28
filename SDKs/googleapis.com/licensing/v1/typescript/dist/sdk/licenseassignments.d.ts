import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LicenseAssignments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * licensingLicenseAssignmentsDelete - Revoke a license.
    **/
    licensingLicenseAssignmentsDelete(req: operations.LicensingLicenseAssignmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsDeleteResponse>;
    /**
     * licensingLicenseAssignmentsGet - Get a specific user's license by product SKU.
    **/
    licensingLicenseAssignmentsGet(req: operations.LicensingLicenseAssignmentsGetRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsGetResponse>;
    /**
     * licensingLicenseAssignmentsInsert - Assign a license.
    **/
    licensingLicenseAssignmentsInsert(req: operations.LicensingLicenseAssignmentsInsertRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsInsertResponse>;
    /**
     * licensingLicenseAssignmentsListForProduct - List all users assigned licenses for a specific product SKU.
    **/
    licensingLicenseAssignmentsListForProduct(req: operations.LicensingLicenseAssignmentsListForProductRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsListForProductResponse>;
    /**
     * licensingLicenseAssignmentsListForProductAndSku - List all users assigned licenses for a specific product SKU.
    **/
    licensingLicenseAssignmentsListForProductAndSku(req: operations.LicensingLicenseAssignmentsListForProductAndSkuRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsListForProductAndSkuResponse>;
    /**
     * licensingLicenseAssignmentsPatch - Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
    **/
    licensingLicenseAssignmentsPatch(req: operations.LicensingLicenseAssignmentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsPatchResponse>;
    /**
     * licensingLicenseAssignmentsUpdate - Reassign a user's product SKU with a different SKU in the same product.
    **/
    licensingLicenseAssignmentsUpdate(req: operations.LicensingLicenseAssignmentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsUpdateResponse>;
}
