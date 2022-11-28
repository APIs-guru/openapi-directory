import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetParentalRatingsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetParentalRatingsRequest extends SpeakeasyBase {
    security: GetParentalRatingsSecurity;
}
export declare class GetParentalRatingsResponse extends SpeakeasyBase {
    contentType: string;
    parentalRatings?: shared.ParentalRating[];
    statusCode: number;
}
