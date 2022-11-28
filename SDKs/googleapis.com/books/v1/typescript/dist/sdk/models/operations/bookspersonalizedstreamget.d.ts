import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum {
    MaxAllowedMaturityRatingUndefined = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED",
    Mature = "MATURE",
    NotMature = "not-mature"
}
export declare class BooksPersonalizedstreamGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    locale?: string;
    maxAllowedMaturityRating?: BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksPersonalizedstreamGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksPersonalizedstreamGetRequest extends SpeakeasyBase {
    queryParams: BooksPersonalizedstreamGetQueryParams;
    security: BooksPersonalizedstreamGetSecurity;
}
export declare class BooksPersonalizedstreamGetResponse extends SpeakeasyBase {
    contentType: string;
    discoveryclusters?: shared.Discoveryclusters;
    statusCode: number;
}
