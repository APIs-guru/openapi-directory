import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsSessionsEntityTypesListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams;
    security: DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3ListSessionEntityTypesResponse?: shared.GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse;
    statusCode: number;
}
