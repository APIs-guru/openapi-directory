import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCellularGatewayLanPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCellularGatewayLanRequest extends SpeakeasyBase {
    pathParams: GetDeviceCellularGatewayLanPathParams;
}
export declare class GetDeviceCellularGatewayLanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCellularGatewayLan200ApplicationJsonObject?: Map<string, any>;
}
