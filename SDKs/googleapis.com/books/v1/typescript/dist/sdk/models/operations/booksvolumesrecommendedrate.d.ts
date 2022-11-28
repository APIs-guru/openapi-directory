import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BooksVolumesRecommendedRateRatingEnum {
    RatingUndefined = "RATING_UNDEFINED",
    HaveIt = "HAVE_IT",
    NotInterested = "NOT_INTERESTED"
}
export declare class BooksVolumesRecommendedRateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    locale?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    rating: BooksVolumesRecommendedRateRatingEnum;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeId: string;
}
export declare class BooksVolumesRecommendedRateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksVolumesRecommendedRateRequest extends SpeakeasyBase {
    queryParams: BooksVolumesRecommendedRateQueryParams;
    security: BooksVolumesRecommendedRateSecurity;
}
export declare class BooksVolumesRecommendedRateResponse extends SpeakeasyBase {
    booksVolumesRecommendedRateResponse?: shared.BooksVolumesRecommendedRateResponse;
    contentType: string;
    statusCode: number;
}
