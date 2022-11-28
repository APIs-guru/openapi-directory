import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsPathParams extends SpeakeasyBase {
    channelId: string;
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    httpPosts?: shared.HttpPost[];
}
