import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesPathParams extends SpeakeasyBase {
    offeringId: string;
    pulseId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesPathParams;
}
export declare class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    pulseResponses?: shared.PulseResponse[];
    statusCode: number;
}
