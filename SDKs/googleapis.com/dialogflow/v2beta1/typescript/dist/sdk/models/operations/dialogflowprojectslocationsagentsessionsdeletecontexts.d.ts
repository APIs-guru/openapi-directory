import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams;
    queryParams: DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams;
    security: DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity;
}
export declare class DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
