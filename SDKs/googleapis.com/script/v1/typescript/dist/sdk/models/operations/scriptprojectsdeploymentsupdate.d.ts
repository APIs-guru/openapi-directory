import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsDeploymentsUpdatePathParams extends SpeakeasyBase {
    deploymentId: string;
    scriptId: string;
}
export declare class ScriptProjectsDeploymentsUpdateQueryParams extends SpeakeasyBase {
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
export declare class ScriptProjectsDeploymentsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsDeploymentsUpdateRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsDeploymentsUpdatePathParams;
    queryParams: ScriptProjectsDeploymentsUpdateQueryParams;
    request?: shared.UpdateDeploymentRequest;
    security: ScriptProjectsDeploymentsUpdateSecurity;
}
export declare class ScriptProjectsDeploymentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deployment?: shared.Deployment;
    statusCode: number;
}
