import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdLearnersPendingSubmissionPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams extends SpeakeasyBase {
    days?: string;
}
export declare class GetOfferingsOfferingIdLearnersPendingSubmissionRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdLearnersPendingSubmissionPathParams;
    queryParams: GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams;
}
export declare class GetOfferingsOfferingIdLearnersPendingSubmissionResponse extends SpeakeasyBase {
    assessmentPendingSubmissions?: shared.AssessmentPendingSubmission[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
