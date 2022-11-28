import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsPagesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsPagesCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsPagesCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsPagesCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsPagesCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1PageInput;
    security: DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsPagesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1Page?: shared.GoogleCloudDialogflowCxV3beta1Page;
    statusCode: number;
}
