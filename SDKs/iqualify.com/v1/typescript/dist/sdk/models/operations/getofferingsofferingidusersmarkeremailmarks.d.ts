import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdUsersMarkerEmailMarksPathParams extends SpeakeasyBase {
    markerEmail: string;
    offeringId: string;
}
export declare class GetOfferingsOfferingIdUsersMarkerEmailMarksRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdUsersMarkerEmailMarksPathParams;
}
export declare class GetOfferingsOfferingIdUsersMarkerEmailMarksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringUsers?: shared.OfferingUser[];
    statusCode: number;
}
