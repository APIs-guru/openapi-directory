import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdPathParams extends SpeakeasyBase {
    assessmentId: string;
    offeringId: string;
    userEmail: string;
}
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    submissionMarkResponses?: any[];
}
