import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkCameraQualityRetentionProfilePathParams extends SpeakeasyBase {
    networkId: string;
    qualityRetentionProfileId: string;
}
export declare class GetNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
    pathParams: GetNetworkCameraQualityRetentionProfilePathParams;
}
export declare class GetNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkCameraQualityRetentionProfile200ApplicationJsonObject?: Map<string, any>;
}
