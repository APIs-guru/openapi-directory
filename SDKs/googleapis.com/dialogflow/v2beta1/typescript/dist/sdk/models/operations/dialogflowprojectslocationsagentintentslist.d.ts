import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentIntentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum DialogflowProjectsLocationsAgentIntentsListIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED",
    IntentViewFull = "INTENT_VIEW_FULL"
}
export declare class DialogflowProjectsLocationsAgentIntentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    intentView?: DialogflowProjectsLocationsAgentIntentsListIntentViewEnum;
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
export declare class DialogflowProjectsLocationsAgentIntentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentIntentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentIntentsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentIntentsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentIntentsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentIntentsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentIntentsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentIntentsListQueryParams;
    security: DialogflowProjectsLocationsAgentIntentsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentIntentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1ListIntentsResponse?: shared.GoogleCloudDialogflowV2beta1ListIntentsResponse;
    statusCode: number;
}
