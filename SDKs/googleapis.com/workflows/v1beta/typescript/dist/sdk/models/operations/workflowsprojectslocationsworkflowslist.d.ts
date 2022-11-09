import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WorkflowsProjectsLocationsWorkflowsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WorkflowsProjectsLocationsWorkflowsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WorkflowsProjectsLocationsWorkflowsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowsProjectsLocationsWorkflowsListRequest extends SpeakeasyBase {
    pathParams: WorkflowsProjectsLocationsWorkflowsListPathParams;
    queryParams: WorkflowsProjectsLocationsWorkflowsListQueryParams;
    security: WorkflowsProjectsLocationsWorkflowsListSecurity;
}
export declare class WorkflowsProjectsLocationsWorkflowsListResponse extends SpeakeasyBase {
    contentType: string;
    listWorkflowsResponse?: shared.ListWorkflowsResponse;
    statusCode: number;
}
