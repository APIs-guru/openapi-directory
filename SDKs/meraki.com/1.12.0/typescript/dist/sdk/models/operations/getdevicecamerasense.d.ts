import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraSensePathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraSenseRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraSensePathParams;
}
export declare class GetDeviceCameraSenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraSense200ApplicationJsonObject?: Map<string, any>;
}
