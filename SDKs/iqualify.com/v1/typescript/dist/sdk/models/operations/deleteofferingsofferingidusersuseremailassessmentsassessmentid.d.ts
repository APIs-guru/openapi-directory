import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams extends SpeakeasyBase {
    assessmentId: string;
    offeringId: string;
    userEmail: string;
}
export declare class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest extends SpeakeasyBase {
    pathParams: DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams;
}
export declare class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
