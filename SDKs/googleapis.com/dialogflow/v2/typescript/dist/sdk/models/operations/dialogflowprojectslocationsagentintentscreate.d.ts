import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentIntentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum {
    IntentViewUnspecified = "INTENT_VIEW_UNSPECIFIED",
    IntentViewFull = "INTENT_VIEW_FULL"
}
export declare class DialogflowProjectsLocationsAgentIntentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    intentView?: DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentIntentsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentIntentsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentIntentsCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentIntentsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2IntentInput;
    security: DialogflowProjectsLocationsAgentIntentsCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentIntentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2Intent?: shared.GoogleCloudDialogflowV2Intent;
    statusCode: number;
}
