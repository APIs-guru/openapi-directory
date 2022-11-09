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
    CloudiotProjectsLocationsRegistriesBindDeviceToGateway(req: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse>;
    CloudiotProjectsLocationsRegistriesCreate(req: operations.CloudiotProjectsLocationsRegistriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesCreateResponse>;
    CloudiotProjectsLocationsRegistriesDevicesConfigVersionsList(req: operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse>;
    CloudiotProjectsLocationsRegistriesDevicesCreate(req: operations.CloudiotProjectsLocationsRegistriesDevicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesCreateResponse>;
    CloudiotProjectsLocationsRegistriesDevicesDelete(req: operations.CloudiotProjectsLocationsRegistriesDevicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesDeleteResponse>;
    CloudiotProjectsLocationsRegistriesDevicesGet(req: operations.CloudiotProjectsLocationsRegistriesDevicesGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesGetResponse>;
    CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig(req: operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse>;
    CloudiotProjectsLocationsRegistriesDevicesPatch(req: operations.CloudiotProjectsLocationsRegistriesDevicesPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesPatchResponse>;
    CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice(req: operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceResponse>;
    CloudiotProjectsLocationsRegistriesDevicesStatesList(req: operations.CloudiotProjectsLocationsRegistriesDevicesStatesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesStatesListResponse>;
    CloudiotProjectsLocationsRegistriesGroupsDevicesList(req: operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse>;
    CloudiotProjectsLocationsRegistriesGroupsGetIamPolicy(req: operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse>;
    CloudiotProjectsLocationsRegistriesGroupsSetIamPolicy(req: operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse>;
    CloudiotProjectsLocationsRegistriesGroupsTestIamPermissions(req: operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse>;
    CloudiotProjectsLocationsRegistriesList(req: operations.CloudiotProjectsLocationsRegistriesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesListResponse>;
    CloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway(req: operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse>;
}
export {};
