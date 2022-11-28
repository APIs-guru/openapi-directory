import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelFeaturesPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetChannelFeaturesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetChannelFeaturesRequest extends SpeakeasyBase {
    pathParams: GetChannelFeaturesPathParams;
    security: GetChannelFeaturesSecurity;
}
export declare class GetChannelFeaturesResponse extends SpeakeasyBase {
    channelFeatures?: shared.ChannelFeatures;
    contentType: string;
    statusCode: number;
}
