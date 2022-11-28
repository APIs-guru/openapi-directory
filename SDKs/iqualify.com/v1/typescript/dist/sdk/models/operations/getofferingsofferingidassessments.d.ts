import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAssessmentsPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAssessmentsRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAssessmentsPathParams;
}
export declare class GetOfferingsOfferingIdAssessmentsResponse extends SpeakeasyBase {
    assessmentResponses?: shared.AssessmentResponse[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
