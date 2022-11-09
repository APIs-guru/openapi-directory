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
    LicensingLicenseAssignmentsDelete(req: operations.LicensingLicenseAssignmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsDeleteResponse>;
    LicensingLicenseAssignmentsGet(req: operations.LicensingLicenseAssignmentsGetRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsGetResponse>;
    LicensingLicenseAssignmentsInsert(req: operations.LicensingLicenseAssignmentsInsertRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsInsertResponse>;
    LicensingLicenseAssignmentsListForProduct(req: operations.LicensingLicenseAssignmentsListForProductRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsListForProductResponse>;
    LicensingLicenseAssignmentsListForProductAndSku(req: operations.LicensingLicenseAssignmentsListForProductAndSkuRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsListForProductAndSkuResponse>;
    LicensingLicenseAssignmentsPatch(req: operations.LicensingLicenseAssignmentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsPatchResponse>;
    LicensingLicenseAssignmentsUpdate(req: operations.LicensingLicenseAssignmentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsUpdateResponse>;
}
export {};
