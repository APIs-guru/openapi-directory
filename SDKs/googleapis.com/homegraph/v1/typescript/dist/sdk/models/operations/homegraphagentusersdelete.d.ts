import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HomegraphAgentUsersDeletePathParams extends SpeakeasyBase {
    agentUserId: string;
}
export declare class HomegraphAgentUsersDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HomegraphAgentUsersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HomegraphAgentUsersDeleteRequest extends SpeakeasyBase {
    pathParams: HomegraphAgentUsersDeletePathParams;
    queryParams: HomegraphAgentUsersDeleteQueryParams;
    security: HomegraphAgentUsersDeleteSecurity;
}
export declare class HomegraphAgentUsersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
