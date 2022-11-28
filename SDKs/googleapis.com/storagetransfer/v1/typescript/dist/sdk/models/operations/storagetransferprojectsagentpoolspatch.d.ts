import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferProjectsAgentPoolsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class StoragetransferProjectsAgentPoolsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class StoragetransferProjectsAgentPoolsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferProjectsAgentPoolsPatchRequest extends SpeakeasyBase {
    pathParams: StoragetransferProjectsAgentPoolsPatchPathParams;
    queryParams: StoragetransferProjectsAgentPoolsPatchQueryParams;
    request?: shared.AgentPoolInput;
    security: StoragetransferProjectsAgentPoolsPatchSecurity;
}
export declare class StoragetransferProjectsAgentPoolsPatchResponse extends SpeakeasyBase {
    agentPool?: shared.AgentPool;
    contentType: string;
    statusCode: number;
}
