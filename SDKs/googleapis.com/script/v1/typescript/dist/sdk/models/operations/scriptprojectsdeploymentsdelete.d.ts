import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsDeploymentsDeletePathParams extends SpeakeasyBase {
    deploymentId: string;
    scriptId: string;
}
export declare class ScriptProjectsDeploymentsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ScriptProjectsDeploymentsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsDeploymentsDeleteRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsDeploymentsDeletePathParams;
    queryParams: ScriptProjectsDeploymentsDeleteQueryParams;
    security: ScriptProjectsDeploymentsDeleteSecurity;
}
export declare class ScriptProjectsDeploymentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
