import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3Agent;
    security: DialogflowProjectsLocationsAgentsCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3Agent?: shared.GoogleCloudDialogflowCxV3Agent;
    statusCode: number;
}
