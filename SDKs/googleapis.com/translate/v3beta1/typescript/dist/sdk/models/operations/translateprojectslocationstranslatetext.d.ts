import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsTranslateTextPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranslateProjectsLocationsTranslateTextQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TranslateProjectsLocationsTranslateTextSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsTranslateTextSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsTranslateTextSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsTranslateTextSecurityOption1;
    option2?: TranslateProjectsLocationsTranslateTextSecurityOption2;
}
export declare class TranslateProjectsLocationsTranslateTextRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsTranslateTextPathParams;
    queryParams: TranslateProjectsLocationsTranslateTextQueryParams;
    request?: shared.TranslateTextRequest;
    security: TranslateProjectsLocationsTranslateTextSecurity;
}
export declare class TranslateProjectsLocationsTranslateTextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    translateTextResponse?: shared.TranslateTextResponse;
}
