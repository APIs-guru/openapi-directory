import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpeechProjectsLocationsPhraseSetsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SpeechProjectsLocationsPhraseSetsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SpeechProjectsLocationsPhraseSetsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpeechProjectsLocationsPhraseSetsPatchRequest extends SpeakeasyBase {
    pathParams: SpeechProjectsLocationsPhraseSetsPatchPathParams;
    queryParams: SpeechProjectsLocationsPhraseSetsPatchQueryParams;
    request?: shared.PhraseSet;
    security: SpeechProjectsLocationsPhraseSetsPatchSecurity;
}
export declare class SpeechProjectsLocationsPhraseSetsPatchResponse extends SpeakeasyBase {
    contentType: string;
    phraseSet?: shared.PhraseSet;
    statusCode: number;
}
