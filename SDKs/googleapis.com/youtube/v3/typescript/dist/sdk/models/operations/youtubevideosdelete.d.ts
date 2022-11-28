import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeVideosDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeVideosDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeVideosDeleteSecurityOption1;
    option2?: YoutubeVideosDeleteSecurityOption2;
    option3?: YoutubeVideosDeleteSecurityOption3;
}
export declare class YoutubeVideosDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeVideosDeleteQueryParams;
    security: YoutubeVideosDeleteSecurity;
}
export declare class YoutubeVideosDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
