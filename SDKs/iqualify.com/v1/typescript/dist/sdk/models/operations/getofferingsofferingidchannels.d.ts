import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdChannelsPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdChannelsRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdChannelsPathParams;
}
export declare class GetOfferingsOfferingIdChannelsResponse extends SpeakeasyBase {
    channelResponses?: shared.ChannelResponse[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
