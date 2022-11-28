import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOfferingsOfferingIdUsersUserEmailBadgesAwardPathParams extends SpeakeasyBase {
    offeringId: string;
    userEmail: string;
}
export declare class PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest extends SpeakeasyBase {
    pathParams: PostOfferingsOfferingIdUsersUserEmailBadgesAwardPathParams;
}
export declare class PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse extends SpeakeasyBase {
    awardedResponse?: shared.AwardedResponse;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
