import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum {
    MaxAllowedMaturityRatingUndefined = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED",
    Mature = "MATURE",
    NotMature = "not-mature"
}
export declare class BooksVolumesRecommendedListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    locale?: string;
    maxAllowedMaturityRating?: BooksVolumesRecommendedListMaxAllowedMaturityRatingEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksVolumesRecommendedListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksVolumesRecommendedListRequest extends SpeakeasyBase {
    queryParams: BooksVolumesRecommendedListQueryParams;
    security: BooksVolumesRecommendedListSecurity;
}
export declare class BooksVolumesRecommendedListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumes?: shared.Volumes;
}
