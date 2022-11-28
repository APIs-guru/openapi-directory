import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdPathParams;
}
export declare class GetOfferingsOfferingIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringMetadataResponse?: shared.OfferingMetadataResponse;
    statusCode: number;
}
