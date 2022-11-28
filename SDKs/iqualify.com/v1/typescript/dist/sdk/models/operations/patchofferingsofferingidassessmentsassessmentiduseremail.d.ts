import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams extends SpeakeasyBase {
    assessmentId: string;
    offeringId: string;
    userEmail: string;
}
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody extends SpeakeasyBase {
    dueDate?: Date;
}
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest extends SpeakeasyBase {
    pathParams: PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams;
    request: PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody;
}
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
