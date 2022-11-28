import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeVideosGetRatingQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string[];
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeVideosGetRatingSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosGetRatingSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosGetRatingSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosGetRatingSecurity extends SpeakeasyBase {
    option1?: YoutubeVideosGetRatingSecurityOption1;
    option2?: YoutubeVideosGetRatingSecurityOption2;
    option3?: YoutubeVideosGetRatingSecurityOption3;
}
export declare class YoutubeVideosGetRatingRequest extends SpeakeasyBase {
    queryParams: YoutubeVideosGetRatingQueryParams;
    security: YoutubeVideosGetRatingSecurity;
}
export declare class YoutubeVideosGetRatingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoGetRatingResponse?: shared.VideoGetRatingResponse;
}
