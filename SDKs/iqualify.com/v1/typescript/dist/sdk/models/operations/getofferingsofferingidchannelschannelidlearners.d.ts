import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams extends SpeakeasyBase {
    channelId: string;
    offeringId: string;
}
export declare class GetOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams;
}
export declare class GetOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
    channelResponse?: shared.ChannelResponse;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
