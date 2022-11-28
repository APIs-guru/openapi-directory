import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeVideoCategoriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    hl?: string;
    id?: string[];
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    regionCode?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeVideoCategoriesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideoCategoriesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideoCategoriesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideoCategoriesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideoCategoriesListSecurity extends SpeakeasyBase {
    option1?: YoutubeVideoCategoriesListSecurityOption1;
    option2?: YoutubeVideoCategoriesListSecurityOption2;
    option3?: YoutubeVideoCategoriesListSecurityOption3;
    option4?: YoutubeVideoCategoriesListSecurityOption4;
}
export declare class YoutubeVideoCategoriesListRequest extends SpeakeasyBase {
    queryParams: YoutubeVideoCategoriesListQueryParams;
    security: YoutubeVideoCategoriesListSecurity;
}
export declare class YoutubeVideoCategoriesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoCategoryListResponse?: shared.VideoCategoryListResponse;
}
