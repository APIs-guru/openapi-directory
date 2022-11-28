import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsDeploymentsListPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class ScriptProjectsDeploymentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ScriptProjectsDeploymentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsDeploymentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsDeploymentsListSecurity extends SpeakeasyBase {
    option1?: ScriptProjectsDeploymentsListSecurityOption1;
    option2?: ScriptProjectsDeploymentsListSecurityOption2;
}
export declare class ScriptProjectsDeploymentsListRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsDeploymentsListPathParams;
    queryParams: ScriptProjectsDeploymentsListQueryParams;
    security: ScriptProjectsDeploymentsListSecurity;
}
export declare class ScriptProjectsDeploymentsListResponse extends SpeakeasyBase {
    contentType: string;
    listDeploymentsResponse?: shared.ListDeploymentsResponse;
    statusCode: number;
}
