import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SpeechProjectsLocationsPhraseSetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpeechProjectsLocationsPhraseSetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SpeechProjectsLocationsPhraseSetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpeechProjectsLocationsPhraseSetsListRequest extends SpeakeasyBase {
    pathParams: SpeechProjectsLocationsPhraseSetsListPathParams;
    queryParams: SpeechProjectsLocationsPhraseSetsListQueryParams;
    security: SpeechProjectsLocationsPhraseSetsListSecurity;
}
export declare class SpeechProjectsLocationsPhraseSetsListResponse extends SpeakeasyBase {
    contentType: string;
    listPhraseSetResponse?: shared.ListPhraseSetResponse;
    statusCode: number;
}
