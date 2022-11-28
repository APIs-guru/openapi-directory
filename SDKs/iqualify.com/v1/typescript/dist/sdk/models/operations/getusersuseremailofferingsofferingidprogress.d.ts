import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserEmailOfferingsOfferingIdProgressPathParams extends SpeakeasyBase {
    offeringId: string;
    userEmail: string;
}
export declare class GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson extends SpeakeasyBase {
    completion?: string;
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
}
export declare class GetUsersUserEmailOfferingsOfferingIdProgressRequest extends SpeakeasyBase {
    pathParams: GetUsersUserEmailOfferingsOfferingIdProgressPathParams;
}
export declare class GetUsersUserEmailOfferingsOfferingIdProgressResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJsonObject?: GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson;
    statusCode: number;
}
