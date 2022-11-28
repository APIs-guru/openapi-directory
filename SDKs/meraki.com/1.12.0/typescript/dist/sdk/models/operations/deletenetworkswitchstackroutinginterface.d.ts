import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkSwitchStackRoutingInterfacePathParams extends SpeakeasyBase {
    interfaceId: string;
    networkId: string;
    switchStackId: string;
}
export declare class DeleteNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
    pathParams: DeleteNetworkSwitchStackRoutingInterfacePathParams;
}
export declare class DeleteNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
