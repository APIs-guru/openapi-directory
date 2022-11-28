import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdUsersPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare enum GetOfferingsOfferingIdUsersFacilitatorsEnum {
    True = "true",
    False = "false"
}
export declare enum GetOfferingsOfferingIdUsersLearnersEnum {
    True = "true",
    False = "false"
}
export declare enum GetOfferingsOfferingIdUsersMarkersEnum {
    True = "true",
    False = "false"
}
export declare class GetOfferingsOfferingIdUsersQueryParams extends SpeakeasyBase {
    facilitators?: GetOfferingsOfferingIdUsersFacilitatorsEnum;
    learners?: GetOfferingsOfferingIdUsersLearnersEnum;
    markers?: GetOfferingsOfferingIdUsersMarkersEnum;
}
export declare class GetOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdUsersPathParams;
    queryParams: GetOfferingsOfferingIdUsersQueryParams;
}
export declare class GetOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringUserResponses?: shared.OfferingUserResponse[];
    statusCode: number;
}
