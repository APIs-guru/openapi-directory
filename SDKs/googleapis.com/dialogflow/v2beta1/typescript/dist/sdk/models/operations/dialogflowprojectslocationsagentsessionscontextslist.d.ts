import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentSessionsContextsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentSessionsContextsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsContextsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentSessionsContextsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentSessionsContextsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentSessionsContextsListQueryParams;
    security: DialogflowProjectsLocationsAgentSessionsContextsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentSessionsContextsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1ListContextsResponse?: shared.GoogleCloudDialogflowV2beta1ListContextsResponse;
    statusCode: number;
}
