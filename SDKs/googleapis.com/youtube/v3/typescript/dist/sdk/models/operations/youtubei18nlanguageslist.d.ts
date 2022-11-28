import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeI18nLanguagesListQueryParams extends SpeakeasyBase {
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
export declare class YoutubeI18nLanguagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeI18nLanguagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeI18nLanguagesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeI18nLanguagesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeI18nLanguagesListSecurity extends SpeakeasyBase {
    option1?: YoutubeI18nLanguagesListSecurityOption1;
    option2?: YoutubeI18nLanguagesListSecurityOption2;
    option3?: YoutubeI18nLanguagesListSecurityOption3;
    option4?: YoutubeI18nLanguagesListSecurityOption4;
}
export declare class YoutubeI18nLanguagesListRequest extends SpeakeasyBase {
    queryParams: YoutubeI18nLanguagesListQueryParams;
    security: YoutubeI18nLanguagesListSecurity;
}
export declare class YoutubeI18nLanguagesListResponse extends SpeakeasyBase {
    contentType: string;
    i18nLanguageListResponse?: shared.I18nLanguageListResponse;
    statusCode: number;
}
