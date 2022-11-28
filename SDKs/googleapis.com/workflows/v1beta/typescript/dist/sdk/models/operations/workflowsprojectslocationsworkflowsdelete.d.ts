import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkflowsProjectsLocationsWorkflowsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class WorkflowsProjectsLocationsWorkflowsDeleteQueryParams extends SpeakeasyBase {
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
export declare class WorkflowsProjectsLocationsWorkflowsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkflowsProjectsLocationsWorkflowsDeleteRequest extends SpeakeasyBase {
    pathParams: WorkflowsProjectsLocationsWorkflowsDeletePathParams;
    queryParams: WorkflowsProjectsLocationsWorkflowsDeleteQueryParams;
    security: WorkflowsProjectsLocationsWorkflowsDeleteSecurity;
}
export declare class WorkflowsProjectsLocationsWorkflowsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
