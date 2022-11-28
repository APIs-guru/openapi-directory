import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOfferingsOfferingIdGroupsPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class PostOfferingsOfferingIdGroupsRequest extends SpeakeasyBase {
    pathParams: PostOfferingsOfferingIdGroupsPathParams;
    request: shared.AssessmentGroupRequired;
}
export declare class PostOfferingsOfferingIdGroupsResponse extends SpeakeasyBase {
    assessmentGroupResponse?: shared.AssessmentGroupResponse;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
