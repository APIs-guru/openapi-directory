import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdActivitiesOpenresponsePathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdActivitiesOpenresponseRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdActivitiesOpenresponsePathParams;
}
export declare class GetOfferingsOfferingIdActivitiesOpenresponseResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringActivitiesResponses?: shared.OfferingActivitiesResponse[];
    statusCode: number;
}
