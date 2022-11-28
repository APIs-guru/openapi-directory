import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudidentityDevicesCreate - Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
    **/
    cloudidentityDevicesCreate(req: operations.CloudidentityDevicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesCreateResponse>;
    /**
     * cloudidentityDevicesDeviceUsersApprove - Approves device to access user data.
    **/
    cloudidentityDevicesDeviceUsersApprove(req: operations.CloudidentityDevicesDeviceUsersApproveRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersApproveResponse>;
    /**
     * cloudidentityDevicesDeviceUsersBlock - Blocks device from accessing user data
    **/
    cloudidentityDevicesDeviceUsersBlock(req: operations.CloudidentityDevicesDeviceUsersBlockRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersBlockResponse>;
    /**
     * cloudidentityDevicesDeviceUsersCancelWipe - Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
    **/
    cloudidentityDevicesDeviceUsersCancelWipe(req: operations.CloudidentityDevicesDeviceUsersCancelWipeRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersCancelWipeResponse>;
    /**
     * cloudidentityDevicesDeviceUsersClientStatesList - Lists the client states for the given search query.
    **/
    cloudidentityDevicesDeviceUsersClientStatesList(req: operations.CloudidentityDevicesDeviceUsersClientStatesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersClientStatesListResponse>;
    /**
     * cloudidentityDevicesDeviceUsersList - Lists/Searches DeviceUsers.
    **/
    cloudidentityDevicesDeviceUsersList(req: operations.CloudidentityDevicesDeviceUsersListRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersListResponse>;
    /**
     * cloudidentityDevicesDeviceUsersLookup - Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
    **/
    cloudidentityDevicesDeviceUsersLookup(req: operations.CloudidentityDevicesDeviceUsersLookupRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersLookupResponse>;
    /**
     * cloudidentityDevicesDeviceUsersWipe - Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.
    **/
    cloudidentityDevicesDeviceUsersWipe(req: operations.CloudidentityDevicesDeviceUsersWipeRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersWipeResponse>;
    /**
     * cloudidentityDevicesList - Lists/Searches devices.
    **/
    cloudidentityDevicesList(req: operations.CloudidentityDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesListResponse>;
}
