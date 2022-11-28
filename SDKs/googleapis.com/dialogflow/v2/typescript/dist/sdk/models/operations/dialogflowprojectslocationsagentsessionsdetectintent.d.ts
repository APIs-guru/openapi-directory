import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams extends SpeakeasyBase {
    session: string;
}
export declare class DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentSessionsDetectIntentRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams;
    queryParams: DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams;
    request?: shared.GoogleCloudDialogflowV2DetectIntentRequest;
    security: DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity;
}
export declare class DialogflowProjectsLocationsAgentSessionsDetectIntentResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2DetectIntentResponse?: shared.GoogleCloudDialogflowV2DetectIntentResponse;
    statusCode: number;
}
