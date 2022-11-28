import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOfferingsOfferingIdChannelsPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class PostOfferingsOfferingIdChannelsRequest extends SpeakeasyBase {
    pathParams: PostOfferingsOfferingIdChannelsPathParams;
    request: shared.ChannelRequired;
}
export declare class PostOfferingsOfferingIdChannelsResponse extends SpeakeasyBase {
    channelResponse?: shared.ChannelResponse;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
