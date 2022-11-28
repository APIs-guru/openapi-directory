import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchOfferingsOfferingIdChannelsChannelIdPathParams extends SpeakeasyBase {
    channelId: string;
    offeringId: string;
}
export declare class PatchOfferingsOfferingIdChannelsChannelIdRequest extends SpeakeasyBase {
    pathParams: PatchOfferingsOfferingIdChannelsChannelIdPathParams;
    request: shared.Channel;
}
export declare class PatchOfferingsOfferingIdChannelsChannelIdResponse extends SpeakeasyBase {
    channelResponse?: shared.ChannelResponse;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
