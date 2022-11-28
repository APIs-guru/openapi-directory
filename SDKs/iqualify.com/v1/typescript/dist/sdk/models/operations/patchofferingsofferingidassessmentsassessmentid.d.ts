import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams extends SpeakeasyBase {
    assessmentId: string;
    offeringId: string;
}
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest extends SpeakeasyBase {
    pathParams: PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams;
    request: shared.Assessment;
}
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse extends SpeakeasyBase {
    assessmentResponse?: shared.AssessmentResponse;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
