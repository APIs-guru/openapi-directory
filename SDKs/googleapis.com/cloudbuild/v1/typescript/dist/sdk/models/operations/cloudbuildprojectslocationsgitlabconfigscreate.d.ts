import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsGitLabConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    gitlabConfigId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsCreateRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsGitLabConfigsCreatePathParams;
    queryParams: CloudbuildProjectsLocationsGitLabConfigsCreateQueryParams;
    request?: shared.GitLabConfigInput;
    security: CloudbuildProjectsLocationsGitLabConfigsCreateSecurity;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
