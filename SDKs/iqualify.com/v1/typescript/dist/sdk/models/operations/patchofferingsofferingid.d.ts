import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchOfferingsOfferingIdPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class PatchOfferingsOfferingIdRequest extends SpeakeasyBase {
    pathParams: PatchOfferingsOfferingIdPathParams;
    request: shared.Offering;
}
export declare class PatchOfferingsOfferingIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringMetadataResponse?: shared.OfferingMetadataResponse;
    statusCode: number;
}
