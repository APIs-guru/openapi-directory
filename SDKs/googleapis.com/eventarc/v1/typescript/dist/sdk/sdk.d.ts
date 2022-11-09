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
    EventarcProjectsLocationsChannelConnectionsCreate(req: operations.EventarcProjectsLocationsChannelConnectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsChannelConnectionsCreateResponse>;
    EventarcProjectsLocationsChannelConnectionsList(req: operations.EventarcProjectsLocationsChannelConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsChannelConnectionsListResponse>;
    EventarcProjectsLocationsChannelsCreate(req: operations.EventarcProjectsLocationsChannelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsChannelsCreateResponse>;
    EventarcProjectsLocationsChannelsList(req: operations.EventarcProjectsLocationsChannelsListRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsChannelsListResponse>;
    EventarcProjectsLocationsList(req: operations.EventarcProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsListResponse>;
    EventarcProjectsLocationsOperationsCancel(req: operations.EventarcProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsOperationsCancelResponse>;
    EventarcProjectsLocationsOperationsList(req: operations.EventarcProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsOperationsListResponse>;
    EventarcProjectsLocationsProvidersList(req: operations.EventarcProjectsLocationsProvidersListRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsProvidersListResponse>;
    EventarcProjectsLocationsTriggersCreate(req: operations.EventarcProjectsLocationsTriggersCreateRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersCreateResponse>;
    EventarcProjectsLocationsTriggersDelete(req: operations.EventarcProjectsLocationsTriggersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersDeleteResponse>;
    EventarcProjectsLocationsTriggersGet(req: operations.EventarcProjectsLocationsTriggersGetRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersGetResponse>;
    EventarcProjectsLocationsTriggersGetIamPolicy(req: operations.EventarcProjectsLocationsTriggersGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersGetIamPolicyResponse>;
    EventarcProjectsLocationsTriggersList(req: operations.EventarcProjectsLocationsTriggersListRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersListResponse>;
    EventarcProjectsLocationsTriggersPatch(req: operations.EventarcProjectsLocationsTriggersPatchRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersPatchResponse>;
    EventarcProjectsLocationsTriggersSetIamPolicy(req: operations.EventarcProjectsLocationsTriggersSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersSetIamPolicyResponse>;
    EventarcProjectsLocationsTriggersTestIamPermissions(req: operations.EventarcProjectsLocationsTriggersTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersTestIamPermissionsResponse>;
}
export {};
