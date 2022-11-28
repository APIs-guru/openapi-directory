import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMultiPathParams extends SpeakeasyBase {
    address: string;
    baudrate: number;
    device: string;
    maxframes: number;
}
export declare class GetMultiRequest extends SpeakeasyBase {
    pathParams: GetMultiPathParams;
}
export declare class GetMultiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mbusData?: string;
    textError?: string;
}
