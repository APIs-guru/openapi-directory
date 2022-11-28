import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkCameraQualityRetentionProfilesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCameraQualityRetentionProfilesRequest extends SpeakeasyBase {
    pathParams: GetNetworkCameraQualityRetentionProfilesPathParams;
}
export declare class GetNetworkCameraQualityRetentionProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkCameraQualityRetentionProfiles200ApplicationJsonObject?: Map<string, any>;
}
