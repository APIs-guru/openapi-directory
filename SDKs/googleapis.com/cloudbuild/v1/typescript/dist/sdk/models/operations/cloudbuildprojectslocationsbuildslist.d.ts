import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsBuildsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsBuildsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsBuildsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsBuildsListRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsBuildsListPathParams;
    queryParams: CloudbuildProjectsLocationsBuildsListQueryParams;
    security: CloudbuildProjectsLocationsBuildsListSecurity;
}
export declare class CloudbuildProjectsLocationsBuildsListResponse extends SpeakeasyBase {
    contentType: string;
    listBuildsResponse?: shared.ListBuildsResponse;
    statusCode: number;
}
