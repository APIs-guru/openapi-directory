import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LanguageDocumentsAnalyzeSyntaxQueryParams extends SpeakeasyBase {
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
export declare class LanguageDocumentsAnalyzeSyntaxSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDocumentsAnalyzeSyntaxSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDocumentsAnalyzeSyntaxSecurity extends SpeakeasyBase {
    option1?: LanguageDocumentsAnalyzeSyntaxSecurityOption1;
    option2?: LanguageDocumentsAnalyzeSyntaxSecurityOption2;
}
export declare class LanguageDocumentsAnalyzeSyntaxRequest extends SpeakeasyBase {
    queryParams: LanguageDocumentsAnalyzeSyntaxQueryParams;
    request?: shared.AnalyzeSyntaxRequest;
    security: LanguageDocumentsAnalyzeSyntaxSecurity;
}
export declare class LanguageDocumentsAnalyzeSyntaxResponse extends SpeakeasyBase {
    analyzeSyntaxResponse?: shared.AnalyzeSyntaxResponse;
    contentType: string;
    statusCode: number;
}
