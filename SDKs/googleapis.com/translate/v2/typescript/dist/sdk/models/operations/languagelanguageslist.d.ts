import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LanguageLanguagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    bearerToken?: string;
    callback?: string;
    fields?: string;
    key?: string;
    model?: string;
    oauthToken?: string;
    pp?: boolean;
    prettyPrint?: boolean;
    quotaUser?: string;
    target?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LanguageLanguagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageLanguagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageLanguagesListSecurity extends SpeakeasyBase {
    option1?: LanguageLanguagesListSecurityOption1;
    option2?: LanguageLanguagesListSecurityOption2;
}
export declare class LanguageLanguagesListRequest extends SpeakeasyBase {
    queryParams: LanguageLanguagesListQueryParams;
    security: LanguageLanguagesListSecurity;
}
export declare class LanguageLanguagesListResponse extends SpeakeasyBase {
    contentType: string;
    languagesListResponse?: shared.LanguagesListResponse;
    statusCode: number;
}
