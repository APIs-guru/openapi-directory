import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsOfferingIdBadgesPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class GetOfferingsOfferingIdBadgesRequest extends SpeakeasyBase {
    pathParams: GetOfferingsOfferingIdBadgesPathParams;
}
export declare class GetOfferingsOfferingIdBadgesResponse extends SpeakeasyBase {
    badge?: shared.Badge;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
