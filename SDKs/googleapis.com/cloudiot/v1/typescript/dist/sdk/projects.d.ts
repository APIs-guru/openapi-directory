import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudiotProjectsLocationsRegistriesBindDeviceToGateway - Associates the device with the gateway.
    **/
    cloudiotProjectsLocationsRegistriesBindDeviceToGateway(req: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesCreate - Creates a device registry that contains devices.
    **/
    cloudiotProjectsLocationsRegistriesCreate(req: operations.CloudiotProjectsLocationsRegistriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesCreateResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList - Lists the last few versions of the device configuration in descending order (i.e.: newest first).
    **/
    cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList(req: operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesDevicesCreate - Creates a device in a device registry.
    **/
    cloudiotProjectsLocationsRegistriesDevicesCreate(req: operations.CloudiotProjectsLocationsRegistriesDevicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesCreateResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesDevicesDelete - Deletes a device.
    **/
    cloudiotProjectsLocationsRegistriesDevicesDelete(req: operations.CloudiotProjectsLocationsRegistriesDevicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesDeleteResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesDevicesGet - Gets details about a device.
    **/
    cloudiotProjectsLocationsRegistriesDevicesGet(req: operations.CloudiotProjectsLocationsRegistriesDevicesGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesGetResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig - Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
    **/
    cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig(req: operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesDevicesPatch - Updates a device.
    **/
    cloudiotProjectsLocationsRegistriesDevicesPatch(req: operations.CloudiotProjectsLocationsRegistriesDevicesPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesPatchResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice - Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
    **/
    cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice(req: operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesDevicesStatesList - Lists the last few versions of the device state in descending order (i.e.: newest first).
    **/
    cloudiotProjectsLocationsRegistriesDevicesStatesList(req: operations.CloudiotProjectsLocationsRegistriesDevicesStatesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesStatesListResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesGroupsDevicesList - List devices in a device registry.
    **/
    cloudiotProjectsLocationsRegistriesGroupsDevicesList(req: operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy(req: operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy.
    **/
    cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy(req: operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
    **/
    cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions(req: operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesList - Lists device registries.
    **/
    cloudiotProjectsLocationsRegistriesList(req: operations.CloudiotProjectsLocationsRegistriesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesListResponse>;
    /**
     * cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway - Deletes the association between the device and the gateway.
    **/
    cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway(req: operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse>;
}
