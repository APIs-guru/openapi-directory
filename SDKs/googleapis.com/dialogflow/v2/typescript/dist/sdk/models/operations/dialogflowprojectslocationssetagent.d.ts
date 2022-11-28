import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsSetAgentPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsSetAgentQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsSetAgentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsSetAgentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsSetAgentSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsSetAgentSecurityOption1;
    option2?: DialogflowProjectsLocationsSetAgentSecurityOption2;
}
export declare class DialogflowProjectsLocationsSetAgentRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsSetAgentPathParams;
    queryParams: DialogflowProjectsLocationsSetAgentQueryParams;
    request?: shared.GoogleCloudDialogflowV2Agent;
    security: DialogflowProjectsLocationsSetAgentSecurity;
}
export declare class DialogflowProjectsLocationsSetAgentResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2Agent?: shared.GoogleCloudDialogflowV2Agent;
    statusCode: number;
}
