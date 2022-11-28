import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams extends SpeakeasyBase {
    workflow: string;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams extends SpeakeasyBase {
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
export declare class WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest extends SpeakeasyBase {
    pathParams: WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams;
    queryParams: WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams;
    request?: shared.TriggerPubsubExecutionRequest;
    security: WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse extends SpeakeasyBase {
    contentType: string;
    execution?: shared.Execution;
    statusCode: number;
}
