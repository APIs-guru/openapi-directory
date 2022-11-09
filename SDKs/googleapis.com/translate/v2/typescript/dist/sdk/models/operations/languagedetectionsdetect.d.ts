import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LanguageDetectionsDetectQueryParams extends SpeakeasyBase {
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
export declare class LanguageDetectionsDetectSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDetectionsDetectSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDetectionsDetectSecurity extends SpeakeasyBase {
    option1?: LanguageDetectionsDetectSecurityOption1;
    option2?: LanguageDetectionsDetectSecurityOption2;
}
export declare class LanguageDetectionsDetectRequest extends SpeakeasyBase {
    queryParams: LanguageDetectionsDetectQueryParams;
    request?: shared.DetectLanguageRequest;
    security: LanguageDetectionsDetectSecurity;
}
export declare class LanguageDetectionsDetectResponse extends SpeakeasyBase {
    contentType: string;
    detectionsListResponse?: shared.DetectionsListResponse;
    statusCode: number;
}
