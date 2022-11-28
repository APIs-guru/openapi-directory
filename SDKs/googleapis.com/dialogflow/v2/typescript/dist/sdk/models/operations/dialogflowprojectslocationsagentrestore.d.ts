import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentRestorePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentRestoreQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentRestoreSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentRestoreSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentRestoreSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentRestoreSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentRestoreSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentRestoreRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentRestorePathParams;
    queryParams: DialogflowProjectsLocationsAgentRestoreQueryParams;
    request?: shared.GoogleCloudDialogflowV2RestoreAgentRequest;
    security: DialogflowProjectsLocationsAgentRestoreSecurity;
}
export declare class DialogflowProjectsLocationsAgentRestoreResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
