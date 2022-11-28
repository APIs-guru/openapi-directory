import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkflowsProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WorkflowsProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WorkflowsProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowsProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: WorkflowsProjectsLocationsOperationsListPathParams;
    queryParams: WorkflowsProjectsLocationsOperationsListQueryParams;
    security: WorkflowsProjectsLocationsOperationsListSecurity;
}
export declare class WorkflowsProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
