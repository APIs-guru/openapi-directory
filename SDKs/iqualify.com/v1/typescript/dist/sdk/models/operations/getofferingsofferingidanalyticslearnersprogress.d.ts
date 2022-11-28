import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsLearnersProgressPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsLearnersProgressRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsLearnersProgressPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsLearnersProgressResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    learnerProgressResponses?: shared.LearnerProgressResponse[];
    statusCode: number;
}
