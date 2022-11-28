import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserEmailOfferingsPathParams extends SpeakeasyBase {
    userEmail: string;
}
export declare class PostUsersUserEmailOfferingsRequest extends SpeakeasyBase {
    pathParams: PostUsersUserEmailOfferingsPathParams;
    request: string[];
}
export declare class PostUsersUserEmailOfferingsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringMetadataResponses?: shared.OfferingMetadataResponse[];
    statusCode: number;
}
