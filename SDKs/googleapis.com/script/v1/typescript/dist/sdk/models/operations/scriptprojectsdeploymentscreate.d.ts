import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsDeploymentsCreatePathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class ScriptProjectsDeploymentsCreateQueryParams extends SpeakeasyBase {
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
export declare class ScriptProjectsDeploymentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsDeploymentsCreateRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsDeploymentsCreatePathParams;
    queryParams: ScriptProjectsDeploymentsCreateQueryParams;
    request?: shared.DeploymentConfig;
    security: ScriptProjectsDeploymentsCreateSecurity;
}
export declare class ScriptProjectsDeploymentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    deployment?: shared.Deployment;
    statusCode: number;
}
