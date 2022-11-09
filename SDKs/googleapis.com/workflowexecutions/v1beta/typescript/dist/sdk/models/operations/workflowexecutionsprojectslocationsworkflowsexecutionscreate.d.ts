import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateQueryParams extends SpeakeasyBase {
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
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest extends SpeakeasyBase {
    pathParams: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreatePathParams;
    queryParams: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateQueryParams;
    request?: shared.Execution;
    security: WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity;
}
export declare class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    execution?: shared.Execution;
    statusCode: number;
}
