import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkflowsProjectsLocationsWorkflowsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WorkflowsProjectsLocationsWorkflowsCreateQueryParams extends SpeakeasyBase {
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
    workflowId?: string;
}
export declare class WorkflowsProjectsLocationsWorkflowsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowsProjectsLocationsWorkflowsCreateRequest extends SpeakeasyBase {
    pathParams: WorkflowsProjectsLocationsWorkflowsCreatePathParams;
    queryParams: WorkflowsProjectsLocationsWorkflowsCreateQueryParams;
    request?: shared.WorkflowInput;
    security: WorkflowsProjectsLocationsWorkflowsCreateSecurity;
}
export declare class WorkflowsProjectsLocationsWorkflowsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
