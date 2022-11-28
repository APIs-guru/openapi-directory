import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutOfferingsOfferingIdMetadataLevelPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class PutOfferingsOfferingIdMetadataLevelRequestBody extends SpeakeasyBase {
    level?: string;
}
export declare class PutOfferingsOfferingIdMetadataLevelRequest extends SpeakeasyBase {
    pathParams: PutOfferingsOfferingIdMetadataLevelPathParams;
    request: PutOfferingsOfferingIdMetadataLevelRequestBody;
}
export declare class PutOfferingsOfferingIdMetadataLevelResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringMetadataResponse?: shared.OfferingMetadataResponse;
    statusCode: number;
}
