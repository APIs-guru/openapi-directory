import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LanguageDocumentsAnnotateTextQueryParams extends SpeakeasyBase {
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
export declare class LanguageDocumentsAnnotateTextSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDocumentsAnnotateTextSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDocumentsAnnotateTextSecurity extends SpeakeasyBase {
    option1?: LanguageDocumentsAnnotateTextSecurityOption1;
    option2?: LanguageDocumentsAnnotateTextSecurityOption2;
}
export declare class LanguageDocumentsAnnotateTextRequest extends SpeakeasyBase {
    queryParams: LanguageDocumentsAnnotateTextQueryParams;
    request?: shared.AnnotateTextRequest;
    security: LanguageDocumentsAnnotateTextSecurity;
}
export declare class LanguageDocumentsAnnotateTextResponse extends SpeakeasyBase {
    annotateTextResponse?: shared.AnnotateTextResponse;
    contentType: string;
    statusCode: number;
}
