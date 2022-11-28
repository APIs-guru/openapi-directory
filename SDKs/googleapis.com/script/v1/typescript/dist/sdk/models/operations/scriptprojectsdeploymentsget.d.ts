import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsDeploymentsGetPathParams extends SpeakeasyBase {
    deploymentId: string;
    scriptId: string;
}
export declare class ScriptProjectsDeploymentsGetQueryParams extends SpeakeasyBase {
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
export declare class ScriptProjectsDeploymentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsDeploymentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsDeploymentsGetSecurity extends SpeakeasyBase {
    option1?: ScriptProjectsDeploymentsGetSecurityOption1;
    option2?: ScriptProjectsDeploymentsGetSecurityOption2;
}
export declare class ScriptProjectsDeploymentsGetRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsDeploymentsGetPathParams;
    queryParams: ScriptProjectsDeploymentsGetQueryParams;
    security: ScriptProjectsDeploymentsGetSecurity;
}
export declare class ScriptProjectsDeploymentsGetResponse extends SpeakeasyBase {
    contentType: string;
    deployment?: shared.Deployment;
    statusCode: number;
}
