import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum LanguageTranslationsListFormatEnum {
    Html = "html",
    Text = "text"
}
export declare class LanguageTranslationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    bearerToken?: string;
    callback?: string;
    cid?: string[];
    fields?: string;
    format?: LanguageTranslationsListFormatEnum;
    key?: string;
    model?: string;
    oauthToken?: string;
    pp?: boolean;
    prettyPrint?: boolean;
    q: string[];
    quotaUser?: string;
    source?: string;
    target: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LanguageTranslationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageTranslationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageTranslationsListSecurity extends SpeakeasyBase {
    option1?: LanguageTranslationsListSecurityOption1;
    option2?: LanguageTranslationsListSecurityOption2;
}
export declare class LanguageTranslationsListRequest extends SpeakeasyBase {
    queryParams: LanguageTranslationsListQueryParams;
    security: LanguageTranslationsListSecurity;
}
export declare class LanguageTranslationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    translationsListResponse?: shared.TranslationsListResponse;
}
