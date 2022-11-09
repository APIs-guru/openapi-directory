import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LanguageDetectionsListQueryParams extends SpeakeasyBase {
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
    q: string[];
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LanguageDetectionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDetectionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDetectionsListSecurity extends SpeakeasyBase {
    option1?: LanguageDetectionsListSecurityOption1;
    option2?: LanguageDetectionsListSecurityOption2;
}
export declare class LanguageDetectionsListRequest extends SpeakeasyBase {
    queryParams: LanguageDetectionsListQueryParams;
    security: LanguageDetectionsListSecurity;
}
export declare class LanguageDetectionsListResponse extends SpeakeasyBase {
    contentType: string;
    detectionsListResponse?: shared.DetectionsListResponse;
    statusCode: number;
}
