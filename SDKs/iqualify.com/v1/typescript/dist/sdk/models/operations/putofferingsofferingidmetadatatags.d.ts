import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutOfferingsOfferingIdMetadataTagsPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class PutOfferingsOfferingIdMetadataTagsRequestBody extends SpeakeasyBase {
    tags?: string[];
}
export declare class PutOfferingsOfferingIdMetadataTagsRequest extends SpeakeasyBase {
    pathParams: PutOfferingsOfferingIdMetadataTagsPathParams;
    request: PutOfferingsOfferingIdMetadataTagsRequestBody;
}
export declare class PutOfferingsOfferingIdMetadataTagsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringMetadataResponse?: shared.OfferingMetadataResponse;
    statusCode: number;
}
