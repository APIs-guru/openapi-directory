import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentSessionsEntityTypesListPathParams;
    queryParams: DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams;
    security: DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity;
}
export declare class DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1ListSessionEntityTypesResponse?: shared.GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse;
    statusCode: number;
}
