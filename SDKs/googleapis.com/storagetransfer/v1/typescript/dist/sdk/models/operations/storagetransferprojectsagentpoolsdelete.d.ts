import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferProjectsAgentPoolsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class StoragetransferProjectsAgentPoolsDeleteQueryParams extends SpeakeasyBase {
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
export declare class StoragetransferProjectsAgentPoolsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferProjectsAgentPoolsDeleteRequest extends SpeakeasyBase {
    pathParams: StoragetransferProjectsAgentPoolsDeletePathParams;
    queryParams: StoragetransferProjectsAgentPoolsDeleteQueryParams;
    security: StoragetransferProjectsAgentPoolsDeleteSecurity;
}
export declare class StoragetransferProjectsAgentPoolsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
