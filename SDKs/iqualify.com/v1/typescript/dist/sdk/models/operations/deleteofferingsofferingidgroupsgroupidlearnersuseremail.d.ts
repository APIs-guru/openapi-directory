import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailPathParams extends SpeakeasyBase {
    groupId: string;
    offeringId: string;
    userEmail: string;
}
export declare class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest extends SpeakeasyBase {
    pathParams: DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailPathParams;
}
export declare class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
