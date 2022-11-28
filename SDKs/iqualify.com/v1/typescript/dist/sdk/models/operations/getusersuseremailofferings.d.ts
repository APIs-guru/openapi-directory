import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserEmailOfferingsPathParams extends SpeakeasyBase {
    userEmail: string;
}
export declare class GetUsersUserEmailOfferingsRequest extends SpeakeasyBase {
    pathParams: GetUsersUserEmailOfferingsPathParams;
}
export declare class GetUsersUserEmailOfferingsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringMetadataResponses?: shared.OfferingMetadataResponse[];
    statusCode: number;
}
