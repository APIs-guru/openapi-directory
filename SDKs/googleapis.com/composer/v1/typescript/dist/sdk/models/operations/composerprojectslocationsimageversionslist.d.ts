import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ComposerProjectsLocationsImageVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ComposerProjectsLocationsImageVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includePastReleases?: boolean;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ComposerProjectsLocationsImageVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ComposerProjectsLocationsImageVersionsListRequest extends SpeakeasyBase {
    pathParams: ComposerProjectsLocationsImageVersionsListPathParams;
    queryParams: ComposerProjectsLocationsImageVersionsListQueryParams;
    security: ComposerProjectsLocationsImageVersionsListSecurity;
}
export declare class ComposerProjectsLocationsImageVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listImageVersionsResponse?: shared.ListImageVersionsResponse;
    statusCode: number;
}
