import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsRestorePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsAgentsRestoreQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsRestoreSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsRestoreSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsRestoreSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsRestoreSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsRestoreSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsRestoreRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsRestorePathParams;
    queryParams: DialogflowProjectsLocationsAgentsRestoreQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1RestoreAgentRequest;
    security: DialogflowProjectsLocationsAgentsRestoreSecurity;
}
export declare class DialogflowProjectsLocationsAgentsRestoreResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
