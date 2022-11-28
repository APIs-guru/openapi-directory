import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsSocialNotesPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsSocialNotesRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsSocialNotesPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsSocialNotesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    socialNotesResponses?: shared.SocialNotesResponse[];
    statusCode: number;
}
