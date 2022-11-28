import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoragetransferProjectsAgentPoolsListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class StoragetransferProjectsAgentPoolsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class StoragetransferProjectsAgentPoolsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StoragetransferProjectsAgentPoolsListRequest extends SpeakeasyBase {
    pathParams: StoragetransferProjectsAgentPoolsListPathParams;
    queryParams: StoragetransferProjectsAgentPoolsListQueryParams;
    security: StoragetransferProjectsAgentPoolsListSecurity;
}
export declare class StoragetransferProjectsAgentPoolsListResponse extends SpeakeasyBase {
    contentType: string;
    listAgentPoolsResponse?: shared.ListAgentPoolsResponse;
    statusCode: number;
}
