import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LanguageTranslationsTranslateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    bearerToken?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pp?: boolean;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LanguageTranslationsTranslateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageTranslationsTranslateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageTranslationsTranslateSecurity extends SpeakeasyBase {
    option1?: LanguageTranslationsTranslateSecurityOption1;
    option2?: LanguageTranslationsTranslateSecurityOption2;
}
export declare class LanguageTranslationsTranslateRequest extends SpeakeasyBase {
    queryParams: LanguageTranslationsTranslateQueryParams;
    request?: shared.TranslateTextRequest;
    security: LanguageTranslationsTranslateSecurity;
}
export declare class LanguageTranslationsTranslateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    translationsListResponse?: shared.TranslationsListResponse;
}
