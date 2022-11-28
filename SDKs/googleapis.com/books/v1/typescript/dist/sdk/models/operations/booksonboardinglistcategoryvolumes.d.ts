import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum {
    MaxAllowedMaturityRatingUndefined = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED",
    Mature = "MATURE",
    NotMature = "not-mature"
}
export declare class BooksOnboardingListCategoryVolumesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    categoryId?: string[];
    fields?: string;
    key?: string;
    locale?: string;
    maxAllowedMaturityRating?: BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksOnboardingListCategoryVolumesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksOnboardingListCategoryVolumesRequest extends SpeakeasyBase {
    queryParams: BooksOnboardingListCategoryVolumesQueryParams;
    security: BooksOnboardingListCategoryVolumesSecurity;
}
export declare class BooksOnboardingListCategoryVolumesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volume2?: shared.Volume2;
}
