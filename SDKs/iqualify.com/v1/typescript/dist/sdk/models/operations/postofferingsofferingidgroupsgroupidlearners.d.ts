import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams extends SpeakeasyBase {
    groupId: string;
    offeringId: string;
}
export declare class PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare class PostOfferingsOfferingIdGroupsGroupIdLearnersRequest extends SpeakeasyBase {
    pathParams: PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams;
    request: PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody;
}
export declare class PostOfferingsOfferingIdGroupsGroupIdLearnersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    userResponse?: shared.UserResponse;
}
