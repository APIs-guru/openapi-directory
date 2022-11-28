import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeVideosUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeVideosUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosUpdateSecurity extends SpeakeasyBase {
    option1?: YoutubeVideosUpdateSecurityOption1;
    option2?: YoutubeVideosUpdateSecurityOption2;
    option3?: YoutubeVideosUpdateSecurityOption3;
}
export declare class YoutubeVideosUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubeVideosUpdateQueryParams;
    request?: shared.Video;
    security: YoutubeVideosUpdateSecurity;
}
export declare class YoutubeVideosUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    video?: shared.Video;
}
