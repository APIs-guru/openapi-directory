import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WorkflowsProjectsLocationsWorkflowsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WorkflowsProjectsLocationsWorkflowsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WorkflowsProjectsLocationsWorkflowsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowsProjectsLocationsWorkflowsPatchRequest extends SpeakeasyBase {
    pathParams: WorkflowsProjectsLocationsWorkflowsPatchPathParams;
    queryParams: WorkflowsProjectsLocationsWorkflowsPatchQueryParams;
    request?: shared.Workflow;
    security: WorkflowsProjectsLocationsWorkflowsPatchSecurity;
}
export declare class WorkflowsProjectsLocationsWorkflowsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
