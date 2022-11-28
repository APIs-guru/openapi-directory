import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOfferingsOfferingIdUsersMarkerEmailMarksPathParams extends SpeakeasyBase {
    markerEmail: string;
    offeringId: string;
}
export declare class PostOfferingsOfferingIdUsersMarkerEmailMarksRequest extends SpeakeasyBase {
    pathParams: PostOfferingsOfferingIdUsersMarkerEmailMarksPathParams;
    request: string[];
}
export declare class PostOfferingsOfferingIdUsersMarkerEmailMarksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringUsers?: shared.OfferingUser[];
    statusCode: number;
}
