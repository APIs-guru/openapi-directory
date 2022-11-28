import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams;
    security: DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3ListTransitionRouteGroupsResponse?: shared.GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse;
    statusCode: number;
}
