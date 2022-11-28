import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsGitLabConfigsReposListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsLocationsGitLabConfigsReposListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsReposListRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsGitLabConfigsReposListPathParams;
    queryParams: CloudbuildProjectsLocationsGitLabConfigsReposListQueryParams;
    security: CloudbuildProjectsLocationsGitLabConfigsReposListSecurity;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsReposListResponse extends SpeakeasyBase {
    contentType: string;
    listGitLabRepositoriesResponse?: shared.ListGitLabRepositoriesResponse;
    statusCode: number;
}
