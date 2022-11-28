import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentGetValidationResultPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentGetValidationResultQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentGetValidationResultSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentGetValidationResultRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentGetValidationResultPathParams;
    queryParams: DialogflowProjectsLocationsAgentGetValidationResultQueryParams;
    security: DialogflowProjectsLocationsAgentGetValidationResultSecurity;
}
export declare class DialogflowProjectsLocationsAgentGetValidationResultResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ValidationResult?: shared.GoogleCloudDialogflowV2ValidationResult;
    statusCode: number;
}
