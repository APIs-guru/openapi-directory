import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams extends SpeakeasyBase {
    session: string;
}
export declare class DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams;
    queryParams: DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1MatchIntentRequest;
    security: DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity;
}
export declare class DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1MatchIntentResponse?: shared.GoogleCloudDialogflowCxV3beta1MatchIntentResponse;
    statusCode: number;
}
