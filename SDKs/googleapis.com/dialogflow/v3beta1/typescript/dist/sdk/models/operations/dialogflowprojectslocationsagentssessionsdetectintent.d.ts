import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsSessionsDetectIntentPathParams extends SpeakeasyBase {
    session: string;
}
export declare class DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsSessionsDetectIntentPathParams;
    queryParams: DialogflowProjectsLocationsAgentsSessionsDetectIntentQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1DetectIntentRequest;
    security: DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity;
}
export declare class DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1DetectIntentResponse?: shared.GoogleCloudDialogflowCxV3beta1DetectIntentResponse;
    statusCode: number;
}
