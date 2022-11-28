import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentSessionsContextsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2Context;
    security: DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentSessionsContextsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2Context?: shared.GoogleCloudDialogflowV2Context;
    statusCode: number;
}
