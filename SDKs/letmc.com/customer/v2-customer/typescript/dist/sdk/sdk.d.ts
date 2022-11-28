import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://live-api.letmc.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * branchControllerGetBranches - All branches defined for a company
    **/
    branchControllerGetBranches(req: operations.BranchControllerGetBranchesRequest, config?: AxiosRequestConfig): Promise<operations.BranchControllerGetBranchesResponse>;
    /**
     * getV2CustomerShortNameBranchBranchesBranchId - Get a specific branch given its unique Object ID (OID)
    **/
    getV2CustomerShortNameBranchBranchesBranchId(req: operations.GetV2CustomerShortNameBranchBranchesBranchIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CustomerShortNameBranchBranchesBranchIdResponse>;
    /**
     * landlordControllerCreateMaintenancePreference - Post tenancy maintenance preferences:-
    **/
    landlordControllerCreateMaintenancePreference(req: operations.LandlordControllerCreateMaintenancePreferenceRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerCreateMaintenancePreferenceResponse>;
    /**
     * landlordControllerGetAccounts - Get the accounting details for the landlord.
    **/
    landlordControllerGetAccounts(req: operations.LandlordControllerGetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetAccountsResponse>;
    /**
     * landlordControllerGetDocument - Download a Document
    **/
    landlordControllerGetDocument(req: operations.LandlordControllerGetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetDocumentResponse>;
    /**
     * landlordControllerGetInvetoryReport - Generate a Inventory PDF for a tenancy
    **/
    landlordControllerGetInvetoryReport(req: operations.LandlordControllerGetInvetoryReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetInvetoryReportResponse>;
    /**
     * landlordControllerGetInvoice - Get an invoice pdf belonging to the landlord.
    **/
    landlordControllerGetInvoice(req: operations.LandlordControllerGetInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetInvoiceResponse>;
    /**
     * landlordControllerGetLandlordCrmEntries - Retrieve landlord's CRM ID
    **/
    landlordControllerGetLandlordCrmEntries(req: operations.LandlordControllerGetLandlordCrmEntriesRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetLandlordCrmEntriesResponse>;
    /**
     * landlordControllerGetMaintenanceJobs - Get Active maintenance jobs.
    **/
    landlordControllerGetMaintenanceJobs(req: operations.LandlordControllerGetMaintenanceJobsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetMaintenanceJobsResponse>;
    /**
     * landlordControllerGetProfitLossReport - Generate a Profit and Loss Report
    **/
    landlordControllerGetProfitLossReport(req: operations.LandlordControllerGetProfitLossReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetProfitLossReportResponse>;
    /**
     * landlordControllerGetRentArrears - Rent Arrears
    **/
    landlordControllerGetRentArrears(req: operations.LandlordControllerGetRentArrearsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetRentArrearsResponse>;
    /**
     * landlordControllerGetSasReport - Generate a Self Assessment Tax Report
    **/
    landlordControllerGetSasReport(req: operations.LandlordControllerGetSasReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetSasReportResponse>;
    /**
     * landlordControllerGetSettings - Get contact details of all linked landlords.
    **/
    landlordControllerGetSettings(req: operations.LandlordControllerGetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetSettingsResponse>;
    /**
     * landlordControllerGetSummaryDetails - Get the summary details for the landlord.
    **/
    landlordControllerGetSummaryDetails(req: operations.LandlordControllerGetSummaryDetailsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetSummaryDetailsResponse>;
    /**
     * landlordControllerGetTenancy - Get tenancy details.
    **/
    landlordControllerGetTenancy(req: operations.LandlordControllerGetTenancyRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetTenancyResponse>;
    /**
     * landlordControllerGetTenancyAgreementReport - Generate a Tenancy Agreement Copy (PDF)
    **/
    landlordControllerGetTenancyAgreementReport(req: operations.LandlordControllerGetTenancyAgreementReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetTenancyAgreementReportResponse>;
    /**
     * photoControllerGetPhotoDownload - Downloads the photo of a property given the photo ID.
    **/
    photoControllerGetPhotoDownload(req: operations.PhotoControllerGetPhotoDownloadRequest, config?: AxiosRequestConfig): Promise<operations.PhotoControllerGetPhotoDownloadResponse>;
    /**
     * propertyControllerGetPropertiesPhotos - A collection showing all the photos linked to a specific block, property or room
    **/
    propertyControllerGetPropertiesPhotos(req: operations.PropertyControllerGetPropertiesPhotosRequest, config?: AxiosRequestConfig): Promise<operations.PropertyControllerGetPropertiesPhotosResponse>;
    /**
     * sessionControllerChangePassword - Change the password of a customer given their existing and new password.
    **/
    sessionControllerChangePassword(req: operations.SessionControllerChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerChangePasswordResponse>;
    /**
     * sessionControllerCreateLandlordLogin - Send a request to the in-tray to create a landlord login.
    **/
    sessionControllerCreateLandlordLogin(req: operations.SessionControllerCreateLandlordLoginRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerCreateLandlordLoginResponse>;
    /**
     * sessionControllerGetSessionInfo - Gets information about the currently logged on customer.
    **/
    sessionControllerGetSessionInfo(req: operations.SessionControllerGetSessionInfoRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerGetSessionInfoResponse>;
    /**
     * sessionControllerLogin - Login as a customer given their username and password.
    **/
    sessionControllerLogin(req: operations.SessionControllerLoginRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerLoginResponse>;
    /**
     * sessionControllerLogout - Logout a customer previously logged in via the Login endpoint.
    **/
    sessionControllerLogout(req: operations.SessionControllerLogoutRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerLogoutResponse>;
    /**
     * sessionControllerResetPassword - Reset the customer's password. An email will be sent out to reset.
    **/
    sessionControllerResetPassword(req: operations.SessionControllerResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerResetPasswordResponse>;
}
export {};
