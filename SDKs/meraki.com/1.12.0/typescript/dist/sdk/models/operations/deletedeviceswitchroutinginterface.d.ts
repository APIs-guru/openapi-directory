import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
    interfaceId: string;
    serial: string;
}
export declare class DeleteDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
    pathParams: DeleteDeviceSwitchRoutingInterfacePathParams;
}
export declare class DeleteDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
