import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsDetectLanguagePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranslateProjectsLocationsDetectLanguageQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsDetectLanguageSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsDetectLanguageSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsDetectLanguageSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsDetectLanguageSecurityOption1;
    option2?: TranslateProjectsLocationsDetectLanguageSecurityOption2;
}
export declare class TranslateProjectsLocationsDetectLanguageRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsDetectLanguagePathParams;
    queryParams: TranslateProjectsLocationsDetectLanguageQueryParams;
    request?: shared.DetectLanguageRequest;
    security: TranslateProjectsLocationsDetectLanguageSecurity;
}
export declare class TranslateProjectsLocationsDetectLanguageResponse extends SpeakeasyBase {
    contentType: string;
    detectLanguageResponse?: shared.DetectLanguageResponse;
    statusCode: number;
}
