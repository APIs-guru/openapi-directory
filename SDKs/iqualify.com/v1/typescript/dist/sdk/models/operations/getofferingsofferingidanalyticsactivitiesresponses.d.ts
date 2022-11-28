import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsActivitiesResponsesPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsActivitiesResponsesPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse extends SpeakeasyBase {
    activityAttemptOpenResponses?: shared.ActivityAttemptOpenResponse[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
