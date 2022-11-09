import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum {
    ExecutionViewUnspecified = "EXECUTION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest extends SpeakeasyBase {
    pathParams: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams;
    queryParams: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams;
    security: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse extends SpeakeasyBase {
    contentType: string;
    execution?: shared.Execution;
    statusCode: number;
}
