import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsGithubEnterpriseConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    gheConfigId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsGithubEnterpriseConfigsCreatePathParams;
    queryParams: CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateQueryParams;
    request?: shared.GitHubEnterpriseConfigInput;
    security: CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateSecurity;
}
export declare class CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
