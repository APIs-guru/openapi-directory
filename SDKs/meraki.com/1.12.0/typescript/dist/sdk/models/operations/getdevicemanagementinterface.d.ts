import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceManagementInterfacePathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceManagementInterfaceRequest extends SpeakeasyBase {
    pathParams: GetDeviceManagementInterfacePathParams;
}
export declare class GetDeviceManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
