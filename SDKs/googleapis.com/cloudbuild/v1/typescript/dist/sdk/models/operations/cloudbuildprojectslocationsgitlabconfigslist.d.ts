import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsGitLabConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsListQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsLocationsGitLabConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsListRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsGitLabConfigsListPathParams;
    queryParams: CloudbuildProjectsLocationsGitLabConfigsListQueryParams;
    security: CloudbuildProjectsLocationsGitLabConfigsListSecurity;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listGitLabConfigsResponse?: shared.ListGitLabConfigsResponse;
    statusCode: number;
}
