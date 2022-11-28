import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsGetAgentPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsGetAgentQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsGetAgentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsGetAgentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsGetAgentSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsGetAgentSecurityOption1;
    option2?: DialogflowProjectsLocationsGetAgentSecurityOption2;
}
export declare class DialogflowProjectsLocationsGetAgentRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsGetAgentPathParams;
    queryParams: DialogflowProjectsLocationsGetAgentQueryParams;
    security: DialogflowProjectsLocationsGetAgentSecurity;
}
export declare class DialogflowProjectsLocationsGetAgentResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2Agent?: shared.GoogleCloudDialogflowV2Agent;
    statusCode: number;
}
