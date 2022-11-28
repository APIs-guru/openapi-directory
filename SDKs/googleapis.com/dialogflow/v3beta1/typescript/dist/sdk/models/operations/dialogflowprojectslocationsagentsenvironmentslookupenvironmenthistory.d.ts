import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams;
    queryParams: DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams;
    security: DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse?: shared.GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse;
    statusCode: number;
}
