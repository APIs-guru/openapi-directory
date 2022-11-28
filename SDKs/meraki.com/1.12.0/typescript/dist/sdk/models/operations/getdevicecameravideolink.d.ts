import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraVideoLinkPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraVideoLinkQueryParams extends SpeakeasyBase {
    timestamp?: Date;
}
export declare class GetDeviceCameraVideoLinkRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraVideoLinkPathParams;
    queryParams: GetDeviceCameraVideoLinkQueryParams;
}
export declare class GetDeviceCameraVideoLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraVideoLink200ApplicationJsonObject?: Map<string, any>;
}
