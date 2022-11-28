import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdGroupsGroupIdLearnersPathParams extends SpeakeasyBase {
    groupId: string;
    offeringId: string;
}
export declare class GetOfferingsOfferingIdGroupsGroupIdLearnersRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdGroupsGroupIdLearnersPathParams;
}
export declare class GetOfferingsOfferingIdGroupsGroupIdLearnersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    userResponses?: shared.UserResponse[];
}
