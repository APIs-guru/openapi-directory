import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpeechProjectsLocationsPhraseSetsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpeechProjectsLocationsPhraseSetsCreateQueryParams extends SpeakeasyBase {
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
export declare class SpeechProjectsLocationsPhraseSetsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpeechProjectsLocationsPhraseSetsCreateRequest extends SpeakeasyBase {
    pathParams: SpeechProjectsLocationsPhraseSetsCreatePathParams;
    queryParams: SpeechProjectsLocationsPhraseSetsCreateQueryParams;
    request?: shared.CreatePhraseSetRequest;
    security: SpeechProjectsLocationsPhraseSetsCreateSecurity;
}
export declare class SpeechProjectsLocationsPhraseSetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    phraseSet?: shared.PhraseSet;
    statusCode: number;
}
