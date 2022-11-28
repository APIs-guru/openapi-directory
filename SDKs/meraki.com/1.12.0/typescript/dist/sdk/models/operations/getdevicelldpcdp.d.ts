import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceLldpCdpPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceLldpCdpRequest extends SpeakeasyBase {
    pathParams: GetDeviceLldpCdpPathParams;
}
export declare class GetDeviceLldpCdpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceLldpCdp200ApplicationJsonObject?: Map<string, any>;
}
