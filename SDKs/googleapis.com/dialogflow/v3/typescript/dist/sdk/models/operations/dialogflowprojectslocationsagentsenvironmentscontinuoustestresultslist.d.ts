import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListQueryParams;
    security: DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3ListContinuousTestResultsResponse?: shared.GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse;
    statusCode: number;
}
