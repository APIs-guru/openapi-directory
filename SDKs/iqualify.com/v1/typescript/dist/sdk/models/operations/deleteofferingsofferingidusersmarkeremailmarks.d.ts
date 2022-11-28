import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams extends SpeakeasyBase {
    markerEmail: string;
    offeringId: string;
}
export declare class DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest extends SpeakeasyBase {
    pathParams: DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams;
    request: string[];
}
export declare class DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringUsers?: shared.OfferingUser[];
    statusCode: number;
}
