import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteOfferingsOfferingIdUsersUserEmailPathParams extends SpeakeasyBase {
    offeringId: string;
    userEmail: string;
}
export declare class DeleteOfferingsOfferingIdUsersUserEmailRequest extends SpeakeasyBase {
    pathParams: DeleteOfferingsOfferingIdUsersUserEmailPathParams;
}
export declare class DeleteOfferingsOfferingIdUsersUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
