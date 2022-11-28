import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsWorkflowTemplatesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsWorkflowTemplatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesCreateRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsWorkflowTemplatesCreatePathParams;
    queryParams: DataprocProjectsRegionsWorkflowTemplatesCreateQueryParams;
    request?: shared.WorkflowTemplateInput;
    security: DataprocProjectsRegionsWorkflowTemplatesCreateSecurity;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workflowTemplate?: shared.WorkflowTemplate;
}
