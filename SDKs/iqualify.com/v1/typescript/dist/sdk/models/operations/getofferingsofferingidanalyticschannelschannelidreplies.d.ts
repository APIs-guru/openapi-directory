import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams extends SpeakeasyBase {
    channelId: string;
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse extends SpeakeasyBase {
    comments?: shared.Comment[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
