import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsMarksQuizzesPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsMarksQuizzesPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    quizMarkResponses?: shared.QuizMarkResponse[];
    statusCode: number;
}
