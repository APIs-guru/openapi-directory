import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOfferingsRequest extends SpeakeasyBase {
    request: shared.OfferingRequired;
}
export declare class PostOfferingsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringMetadataResponse?: shared.OfferingMetadataResponse;
    statusCode: number;
}
