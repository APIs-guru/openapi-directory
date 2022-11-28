import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsGetSupportedLanguagesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranslateProjectsLocationsGetSupportedLanguagesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    displayLanguageCode?: string;
    fields?: string;
    key?: string;
    model?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsGetSupportedLanguagesSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1;
    option2?: TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2;
}
export declare class TranslateProjectsLocationsGetSupportedLanguagesRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsGetSupportedLanguagesPathParams;
    queryParams: TranslateProjectsLocationsGetSupportedLanguagesQueryParams;
    security: TranslateProjectsLocationsGetSupportedLanguagesSecurity;
}
export declare class TranslateProjectsLocationsGetSupportedLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supportedLanguages?: shared.SupportedLanguages;
}
