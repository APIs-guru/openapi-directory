import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentEnvironmentsGetHistoryPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsGetHistoryQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption1;
    option2?: DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentEnvironmentsGetHistoryPathParams;
    queryParams: DialogflowProjectsLocationsAgentEnvironmentsGetHistoryQueryParams;
    security: DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurity;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsGetHistoryResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2EnvironmentHistory?: shared.GoogleCloudDialogflowV2EnvironmentHistory;
    statusCode: number;
}
