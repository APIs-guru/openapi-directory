import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsSessionsEntityTypesCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3SessionEntityType;
    security: DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3SessionEntityType?: shared.GoogleCloudDialogflowCxV3SessionEntityType;
    statusCode: number;
}
