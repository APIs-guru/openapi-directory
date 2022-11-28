import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsWorkflowTemplatesUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsWorkflowTemplatesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsWorkflowTemplatesUpdatePathParams;
    queryParams: DataprocProjectsRegionsWorkflowTemplatesUpdateQueryParams;
    request?: shared.WorkflowTemplateInput;
    security: DataprocProjectsRegionsWorkflowTemplatesUpdateSecurity;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workflowTemplate?: shared.WorkflowTemplate;
}
