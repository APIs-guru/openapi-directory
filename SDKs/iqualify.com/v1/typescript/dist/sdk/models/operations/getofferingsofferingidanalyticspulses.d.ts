import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsPulsesPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsPulsesRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsPulsesPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsPulsesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    getOfferingsOfferingIdAnalyticsPulses200ApplicationJsonStrings?: string[];
    statusCode: number;
}
