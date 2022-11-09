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
    MybusinessaccountmanagementAccountsCreate(req: operations.MybusinessaccountmanagementAccountsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsCreateResponse>;
    MybusinessaccountmanagementAccountsGet(req: operations.MybusinessaccountmanagementAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsGetResponse>;
    MybusinessaccountmanagementAccountsInvitationsAccept(req: operations.MybusinessaccountmanagementAccountsInvitationsAcceptRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsInvitationsAcceptResponse>;
    MybusinessaccountmanagementAccountsInvitationsDecline(req: operations.MybusinessaccountmanagementAccountsInvitationsDeclineRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsInvitationsDeclineResponse>;
    MybusinessaccountmanagementAccountsInvitationsList(req: operations.MybusinessaccountmanagementAccountsInvitationsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsInvitationsListResponse>;
    MybusinessaccountmanagementAccountsList(req: operations.MybusinessaccountmanagementAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementAccountsListResponse>;
    MybusinessaccountmanagementLocationsAdminsCreate(req: operations.MybusinessaccountmanagementLocationsAdminsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementLocationsAdminsCreateResponse>;
    MybusinessaccountmanagementLocationsAdminsDelete(req: operations.MybusinessaccountmanagementLocationsAdminsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementLocationsAdminsDeleteResponse>;
    MybusinessaccountmanagementLocationsAdminsList(req: operations.MybusinessaccountmanagementLocationsAdminsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementLocationsAdminsListResponse>;
    MybusinessaccountmanagementLocationsAdminsPatch(req: operations.MybusinessaccountmanagementLocationsAdminsPatchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementLocationsAdminsPatchResponse>;
    MybusinessaccountmanagementLocationsTransfer(req: operations.MybusinessaccountmanagementLocationsTransferRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessaccountmanagementLocationsTransferResponse>;
}
export {};
