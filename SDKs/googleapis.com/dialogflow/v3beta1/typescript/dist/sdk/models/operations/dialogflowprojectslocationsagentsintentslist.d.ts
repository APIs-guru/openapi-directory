import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsIntentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED",
    IntentViewPartial = "INTENT_VIEW_PARTIAL",
    IntentViewFull = "INTENT_VIEW_FULL"
}
export declare class DialogflowProjectsLocationsAgentsIntentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    intentView?: DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum;
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
export declare class DialogflowProjectsLocationsAgentsIntentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsIntentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsIntentsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsIntentsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsIntentsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsIntentsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsIntentsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsIntentsListQueryParams;
    security: DialogflowProjectsLocationsAgentsIntentsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsIntentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1ListIntentsResponse?: shared.GoogleCloudDialogflowCxV3beta1ListIntentsResponse;
    statusCode: number;
}
