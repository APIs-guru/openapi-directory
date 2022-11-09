import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsUpdateConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SourcerepoProjectsUpdateConfigQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsUpdateConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsUpdateConfigRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsUpdateConfigPathParams;
    queryParams: SourcerepoProjectsUpdateConfigQueryParams;
    request?: shared.UpdateProjectConfigRequest;
    security: SourcerepoProjectsUpdateConfigSecurity;
}
export declare class SourcerepoProjectsUpdateConfigResponse extends SpeakeasyBase {
    contentType: string;
    projectConfig?: shared.ProjectConfig;
    statusCode: number;
}
