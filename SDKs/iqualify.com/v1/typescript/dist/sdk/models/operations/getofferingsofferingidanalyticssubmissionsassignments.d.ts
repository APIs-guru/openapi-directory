import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse extends SpeakeasyBase {
    assignmentMarkResponses?: shared.AssignmentMarkResponse[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
