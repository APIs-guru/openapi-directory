import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsPathParams extends SpeakeasyBase {
    channelId: string;
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse extends SpeakeasyBase {
    comments?: shared.Comment[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
