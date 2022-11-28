import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsMarksAssignmentsPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsMarksAssignmentsPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse extends SpeakeasyBase {
    assignmentMarkResponses?: shared.AssignmentMarkResponse[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
