import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsGetConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SourcerepoProjectsGetConfigQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsGetConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsGetConfigRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsGetConfigPathParams;
    queryParams: SourcerepoProjectsGetConfigQueryParams;
    security: SourcerepoProjectsGetConfigSecurity;
}
export declare class SourcerepoProjectsGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    projectConfig?: shared.ProjectConfig;
    statusCode: number;
}
