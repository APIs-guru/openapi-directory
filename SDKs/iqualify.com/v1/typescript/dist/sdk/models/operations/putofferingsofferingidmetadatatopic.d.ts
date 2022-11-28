import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutOfferingsOfferingIdMetadataTopicPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class PutOfferingsOfferingIdMetadataTopicRequestBody extends SpeakeasyBase {
    topic?: string;
}
export declare class PutOfferingsOfferingIdMetadataTopicRequest extends SpeakeasyBase {
    pathParams: PutOfferingsOfferingIdMetadataTopicPathParams;
    request: PutOfferingsOfferingIdMetadataTopicRequestBody;
}
export declare class PutOfferingsOfferingIdMetadataTopicResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringMetadataResponse?: shared.OfferingMetadataResponse;
    statusCode: number;
}
