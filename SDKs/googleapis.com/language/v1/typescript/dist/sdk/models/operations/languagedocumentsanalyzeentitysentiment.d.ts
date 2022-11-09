import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LanguageDocumentsAnalyzeEntitySentimentQueryParams extends SpeakeasyBase {
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
export declare class LanguageDocumentsAnalyzeEntitySentimentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDocumentsAnalyzeEntitySentimentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDocumentsAnalyzeEntitySentimentSecurity extends SpeakeasyBase {
    option1?: LanguageDocumentsAnalyzeEntitySentimentSecurityOption1;
    option2?: LanguageDocumentsAnalyzeEntitySentimentSecurityOption2;
}
export declare class LanguageDocumentsAnalyzeEntitySentimentRequest extends SpeakeasyBase {
    queryParams: LanguageDocumentsAnalyzeEntitySentimentQueryParams;
    request?: shared.AnalyzeEntitySentimentRequest;
    security: LanguageDocumentsAnalyzeEntitySentimentSecurity;
}
export declare class LanguageDocumentsAnalyzeEntitySentimentResponse extends SpeakeasyBase {
    analyzeEntitySentimentResponse?: shared.AnalyzeEntitySentimentResponse;
    contentType: string;
    statusCode: number;
}
