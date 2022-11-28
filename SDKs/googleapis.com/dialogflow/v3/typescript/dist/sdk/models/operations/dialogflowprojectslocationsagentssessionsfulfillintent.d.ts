import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams extends SpeakeasyBase {
    session: string;
}
export declare class DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams;
    queryParams: DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3FulfillIntentRequest;
    security: DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity;
}
export declare class DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3FulfillIntentResponse?: shared.GoogleCloudDialogflowCxV3FulfillIntentResponse;
    statusCode: number;
}
