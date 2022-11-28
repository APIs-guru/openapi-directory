import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams extends SpeakeasyBase {
    channelId: string;
    offeringId: string;
}
export declare class PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare class PostOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
    pathParams: PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams;
    request: PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;
}
export declare class PostOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
