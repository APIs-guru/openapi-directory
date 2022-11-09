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
    SmartdevicemanagementEnterprisesDevicesExecuteCommand(req: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse>;
    SmartdevicemanagementEnterprisesDevicesList(req: operations.SmartdevicemanagementEnterprisesDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesDevicesListResponse>;
    SmartdevicemanagementEnterprisesStructuresList(req: operations.SmartdevicemanagementEnterprisesStructuresListRequest, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesStructuresListResponse>;
    SmartdevicemanagementEnterprisesStructuresRoomsGet(req: operations.SmartdevicemanagementEnterprisesStructuresRoomsGetRequest, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse>;
    SmartdevicemanagementEnterprisesStructuresRoomsList(req: operations.SmartdevicemanagementEnterprisesStructuresRoomsListRequest, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse>;
}
export {};
