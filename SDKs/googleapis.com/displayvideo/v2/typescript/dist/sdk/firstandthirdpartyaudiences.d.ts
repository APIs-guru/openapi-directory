import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FirstAndThirdPartyAudiences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoFirstAndThirdPartyAudiencesCreate - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
    **/
    displayvideoFirstAndThirdPartyAudiencesCreate(req: operations.DisplayvideoFirstAndThirdPartyAudiencesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse>;
    /**
     * displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
    **/
    displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers(req: operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse>;
    /**
     * displayvideoFirstAndThirdPartyAudiencesGet - Gets a first and third party audience.
    **/
    displayvideoFirstAndThirdPartyAudiencesGet(req: operations.DisplayvideoFirstAndThirdPartyAudiencesGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse>;
    /**
     * displayvideoFirstAndThirdPartyAudiencesList - Lists first and third party audiences. The order is defined by the order_by parameter.
    **/
    displayvideoFirstAndThirdPartyAudiencesList(req: operations.DisplayvideoFirstAndThirdPartyAudiencesListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse>;
    /**
     * displayvideoFirstAndThirdPartyAudiencesPatch - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
    **/
    displayvideoFirstAndThirdPartyAudiencesPatch(req: operations.DisplayvideoFirstAndThirdPartyAudiencesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse>;
}
