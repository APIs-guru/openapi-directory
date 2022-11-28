import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentSessionsEntityTypesCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentSessionsEntityTypesCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1SessionEntityType;
    security: DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1SessionEntityType?: shared.GoogleCloudDialogflowV2beta1SessionEntityType;
    statusCode: number;
}
