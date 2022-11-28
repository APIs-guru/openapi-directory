import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams extends SpeakeasyBase {
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
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest extends SpeakeasyBase {
    pathParams: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelPathParams;
    queryParams: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams;
    request?: Map<string, any>;
    security: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse extends SpeakeasyBase {
    contentType: string;
    execution?: shared.Execution;
    statusCode: number;
}
