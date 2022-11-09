import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LanguageDocumentsClassifyTextQueryParams extends SpeakeasyBase {
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
export declare class LanguageDocumentsClassifyTextSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDocumentsClassifyTextSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDocumentsClassifyTextSecurity extends SpeakeasyBase {
    option1?: LanguageDocumentsClassifyTextSecurityOption1;
    option2?: LanguageDocumentsClassifyTextSecurityOption2;
}
export declare class LanguageDocumentsClassifyTextRequest extends SpeakeasyBase {
    queryParams: LanguageDocumentsClassifyTextQueryParams;
    request?: shared.ClassifyTextRequest;
    security: LanguageDocumentsClassifyTextSecurity;
}
export declare class LanguageDocumentsClassifyTextResponse extends SpeakeasyBase {
    classifyTextResponse?: shared.ClassifyTextResponse;
    contentType: string;
    statusCode: number;
}
