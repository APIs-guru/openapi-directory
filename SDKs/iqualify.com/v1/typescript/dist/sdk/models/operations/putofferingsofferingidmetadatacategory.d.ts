import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutOfferingsOfferingIdMetadataCategoryPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class PutOfferingsOfferingIdMetadataCategoryRequestBody extends SpeakeasyBase {
    category?: string;
}
export declare class PutOfferingsOfferingIdMetadataCategoryRequest extends SpeakeasyBase {
    pathParams: PutOfferingsOfferingIdMetadataCategoryPathParams;
    request: PutOfferingsOfferingIdMetadataCategoryRequestBody;
}
export declare class PutOfferingsOfferingIdMetadataCategoryResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringMetadataResponse?: shared.OfferingMetadataResponse;
    statusCode: number;
}
