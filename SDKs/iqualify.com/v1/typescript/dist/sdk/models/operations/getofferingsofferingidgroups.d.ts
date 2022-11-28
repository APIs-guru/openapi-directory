import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdGroupsPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdGroupsRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdGroupsPathParams;
}
export declare class GetOfferingsOfferingIdGroupsResponse extends SpeakeasyBase {
    assessmentGroupResponses?: shared.AssessmentGroupResponse[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
