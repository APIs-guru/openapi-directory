import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Enterprises {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * smartdevicemanagementEnterprisesDevicesExecuteCommand - Executes a command to device managed by the enterprise.
    **/
    smartdevicemanagementEnterprisesDevicesExecuteCommand(req: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse>;
    /**
     * smartdevicemanagementEnterprisesDevicesList - Lists devices managed by the enterprise.
    **/
    smartdevicemanagementEnterprisesDevicesList(req: operations.SmartdevicemanagementEnterprisesDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesDevicesListResponse>;
    /**
     * smartdevicemanagementEnterprisesStructuresList - Lists structures managed by the enterprise.
    **/
    smartdevicemanagementEnterprisesStructuresList(req: operations.SmartdevicemanagementEnterprisesStructuresListRequest, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesStructuresListResponse>;
    /**
     * smartdevicemanagementEnterprisesStructuresRoomsGet - Gets a room managed by the enterprise.
    **/
    smartdevicemanagementEnterprisesStructuresRoomsGet(req: operations.SmartdevicemanagementEnterprisesStructuresRoomsGetRequest, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse>;
    /**
     * smartdevicemanagementEnterprisesStructuresRoomsList - Lists rooms managed by the enterprise.
    **/
    smartdevicemanagementEnterprisesStructuresRoomsList(req: operations.SmartdevicemanagementEnterprisesStructuresRoomsListRequest, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse>;
}
