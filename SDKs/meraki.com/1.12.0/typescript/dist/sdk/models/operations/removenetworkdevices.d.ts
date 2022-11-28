import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveNetworkDevicesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class RemoveNetworkDevicesRequestBody extends SpeakeasyBase {
    serial: string;
}
export declare class RemoveNetworkDevicesRequest extends SpeakeasyBase {
    pathParams: RemoveNetworkDevicesPathParams;
    request: RemoveNetworkDevicesRequestBody;
}
export declare class RemoveNetworkDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
