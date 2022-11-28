import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferProjectsAgentPoolsCreatePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class StoragetransferProjectsAgentPoolsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    agentPoolId?: string;
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
export declare class StoragetransferProjectsAgentPoolsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferProjectsAgentPoolsCreateRequest extends SpeakeasyBase {
    pathParams: StoragetransferProjectsAgentPoolsCreatePathParams;
    queryParams: StoragetransferProjectsAgentPoolsCreateQueryParams;
    request?: shared.AgentPoolInput;
    security: StoragetransferProjectsAgentPoolsCreateSecurity;
}
export declare class StoragetransferProjectsAgentPoolsCreateResponse extends SpeakeasyBase {
    agentPool?: shared.AgentPool;
    contentType: string;
    statusCode: number;
}
