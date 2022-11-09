import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SpeechProjectsLocationsCustomClassesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpeechProjectsLocationsCustomClassesListQueryParams extends SpeakeasyBase {
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
export declare class SpeechProjectsLocationsCustomClassesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpeechProjectsLocationsCustomClassesListRequest extends SpeakeasyBase {
    pathParams: SpeechProjectsLocationsCustomClassesListPathParams;
    queryParams: SpeechProjectsLocationsCustomClassesListQueryParams;
    security: SpeechProjectsLocationsCustomClassesListSecurity;
}
export declare class SpeechProjectsLocationsCustomClassesListResponse extends SpeakeasyBase {
    contentType: string;
    listCustomClassesResponse?: shared.ListCustomClassesResponse;
    statusCode: number;
}
