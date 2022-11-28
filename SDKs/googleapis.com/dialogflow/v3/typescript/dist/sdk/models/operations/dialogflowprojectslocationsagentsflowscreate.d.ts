import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3FlowInput;
    security: DialogflowProjectsLocationsAgentsFlowsCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3Flow?: shared.GoogleCloudDialogflowCxV3Flow;
    statusCode: number;
}
