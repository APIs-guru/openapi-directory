import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsUnitReactionsPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsUnitReactionsRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsUnitReactionsPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsUnitReactionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    unitReactionsAnalyticsResponses?: shared.UnitReactionsAnalyticsResponse[];
}
