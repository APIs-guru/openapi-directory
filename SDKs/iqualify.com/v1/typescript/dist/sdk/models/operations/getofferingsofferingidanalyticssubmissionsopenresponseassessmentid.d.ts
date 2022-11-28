import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdPathParams extends SpeakeasyBase {
    assessmentId: string;
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    submissionMarkResponses?: any[];
}
