import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeVideosRateRatingEnum {
    None = "none",
    Like = "like",
    Dislike = "dislike"
}
export declare class YoutubeVideosRateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    rating: YoutubeVideosRateRatingEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeVideosRateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosRateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosRateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosRateSecurity extends SpeakeasyBase {
    option1?: YoutubeVideosRateSecurityOption1;
    option2?: YoutubeVideosRateSecurityOption2;
    option3?: YoutubeVideosRateSecurityOption3;
}
export declare class YoutubeVideosRateRequest extends SpeakeasyBase {
    queryParams: YoutubeVideosRateQueryParams;
    security: YoutubeVideosRateSecurity;
}
export declare class YoutubeVideosRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
