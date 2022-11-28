import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeI18nRegionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    hl?: string;
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeI18nRegionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeI18nRegionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeI18nRegionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeI18nRegionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeI18nRegionsListSecurity extends SpeakeasyBase {
    option1?: YoutubeI18nRegionsListSecurityOption1;
    option2?: YoutubeI18nRegionsListSecurityOption2;
    option3?: YoutubeI18nRegionsListSecurityOption3;
    option4?: YoutubeI18nRegionsListSecurityOption4;
}
export declare class YoutubeI18nRegionsListRequest extends SpeakeasyBase {
    queryParams: YoutubeI18nRegionsListQueryParams;
    security: YoutubeI18nRegionsListSecurity;
}
export declare class YoutubeI18nRegionsListResponse extends SpeakeasyBase {
    contentType: string;
    i18nRegionListResponse?: shared.I18nRegionListResponse;
    statusCode: number;
}
