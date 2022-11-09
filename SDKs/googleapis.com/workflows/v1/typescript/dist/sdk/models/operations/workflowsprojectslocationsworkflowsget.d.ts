import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WorkflowsProjectsLocationsWorkflowsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WorkflowsProjectsLocationsWorkflowsGetQueryParams extends SpeakeasyBase {
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
export declare class WorkflowsProjectsLocationsWorkflowsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowsProjectsLocationsWorkflowsGetRequest extends SpeakeasyBase {
    pathParams: WorkflowsProjectsLocationsWorkflowsGetPathParams;
    queryParams: WorkflowsProjectsLocationsWorkflowsGetQueryParams;
    security: WorkflowsProjectsLocationsWorkflowsGetSecurity;
}
export declare class WorkflowsProjectsLocationsWorkflowsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workflow?: shared.Workflow;
}
