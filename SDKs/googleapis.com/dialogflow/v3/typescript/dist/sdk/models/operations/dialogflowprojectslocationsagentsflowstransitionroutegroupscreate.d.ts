import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3TransitionRouteGroupInput;
    security: DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3TransitionRouteGroup?: shared.GoogleCloudDialogflowCxV3TransitionRouteGroup;
    statusCode: number;
}
