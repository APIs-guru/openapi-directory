import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsValidatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsValidateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsValidateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsValidateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsValidatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsValidateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1ValidateFlowRequest;
    security: DialogflowProjectsLocationsAgentsFlowsValidateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsValidateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1FlowValidationResult?: shared.GoogleCloudDialogflowCxV3beta1FlowValidationResult;
    statusCode: number;
}
