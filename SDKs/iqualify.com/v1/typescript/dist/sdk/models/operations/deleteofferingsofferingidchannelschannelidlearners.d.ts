import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams extends SpeakeasyBase {
    channelId: string;
    offeringId: string;
}
export declare class DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare class DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
    pathParams: DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams;
    request: DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;
}
export declare class DeleteOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
