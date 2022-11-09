import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum {
    ExecutionViewUnspecified = "EXECUTION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams extends SpeakeasyBase {
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
    view?: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest extends SpeakeasyBase {
    pathParams: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListPathParams;
    queryParams: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListQueryParams;
    security: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse extends SpeakeasyBase {
    contentType: string;
    listExecutionsResponse?: shared.ListExecutionsResponse;
    statusCode: number;
}
