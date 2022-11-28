import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkCameraSchedulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCameraSchedulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkCameraSchedulesPathParams;
}
export declare class GetNetworkCameraSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkCameraSchedules200ApplicationJsonObject?: Map<string, any>;
}
