import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpeechProjectsLocationsPhraseSetsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SpeechProjectsLocationsPhraseSetsGetQueryParams extends SpeakeasyBase {
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
export declare class SpeechProjectsLocationsPhraseSetsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpeechProjectsLocationsPhraseSetsGetRequest extends SpeakeasyBase {
    pathParams: SpeechProjectsLocationsPhraseSetsGetPathParams;
    queryParams: SpeechProjectsLocationsPhraseSetsGetQueryParams;
    security: SpeechProjectsLocationsPhraseSetsGetSecurity;
}
export declare class SpeechProjectsLocationsPhraseSetsGetResponse extends SpeakeasyBase {
    contentType: string;
    phraseSet?: shared.PhraseSet;
    statusCode: number;
}
