import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsGithubEnterpriseConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsGithubEnterpriseConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsGithubEnterpriseConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsGithubEnterpriseConfigsListRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsGithubEnterpriseConfigsListPathParams;
    queryParams: CloudbuildProjectsLocationsGithubEnterpriseConfigsListQueryParams;
    security: CloudbuildProjectsLocationsGithubEnterpriseConfigsListSecurity;
}
export declare class CloudbuildProjectsLocationsGithubEnterpriseConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listGithubEnterpriseConfigsResponse?: shared.ListGithubEnterpriseConfigsResponse;
    statusCode: number;
}
