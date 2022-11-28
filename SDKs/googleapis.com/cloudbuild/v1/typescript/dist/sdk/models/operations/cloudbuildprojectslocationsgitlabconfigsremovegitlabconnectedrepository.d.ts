import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryPathParams extends SpeakeasyBase {
    config: string;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryPathParams;
    queryParams: CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryQueryParams;
    request?: shared.RemoveGitLabConnectedRepositoryRequestInput;
    security: CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositorySecurity;
}
export declare class CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
