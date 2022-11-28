import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllChannelFeaturesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetAllChannelFeaturesRequest extends SpeakeasyBase {
    security: GetAllChannelFeaturesSecurity;
}
export declare class GetAllChannelFeaturesResponse extends SpeakeasyBase {
    channelFeatures?: shared.ChannelFeatures[];
    contentType: string;
    statusCode: number;
}
