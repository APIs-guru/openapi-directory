import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentEnvironmentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    environmentId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentEnvironmentsCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentEnvironmentsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1EnvironmentInput;
    security: DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1Environment?: shared.GoogleCloudDialogflowV2beta1Environment;
    statusCode: number;
}
