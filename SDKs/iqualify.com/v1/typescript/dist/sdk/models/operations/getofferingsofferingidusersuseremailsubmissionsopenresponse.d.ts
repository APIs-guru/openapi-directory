import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponsePathParams extends SpeakeasyBase {
    offeringId: string;
    userEmail: string;
}
export declare class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponsePathParams;
}
export declare class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse extends SpeakeasyBase {
    assignments?: shared.Assignments[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
