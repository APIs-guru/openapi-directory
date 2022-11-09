import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LanguageDocumentsAnalyzeEntitiesQueryParams extends SpeakeasyBase {
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
export declare class LanguageDocumentsAnalyzeEntitiesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDocumentsAnalyzeEntitiesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LanguageDocumentsAnalyzeEntitiesSecurity extends SpeakeasyBase {
    option1?: LanguageDocumentsAnalyzeEntitiesSecurityOption1;
    option2?: LanguageDocumentsAnalyzeEntitiesSecurityOption2;
}
export declare class LanguageDocumentsAnalyzeEntitiesRequest extends SpeakeasyBase {
    queryParams: LanguageDocumentsAnalyzeEntitiesQueryParams;
    request?: shared.AnalyzeEntitiesRequest;
    security: LanguageDocumentsAnalyzeEntitiesSecurity;
}
export declare class LanguageDocumentsAnalyzeEntitiesResponse extends SpeakeasyBase {
    analyzeEntitiesResponse?: shared.AnalyzeEntitiesResponse;
    contentType: string;
    statusCode: number;
}
