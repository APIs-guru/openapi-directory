import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsWorkflowTemplatesInstantiateInlinePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsWorkflowTemplatesInstantiateInlinePathParams;
    queryParams: DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineQueryParams;
    request?: shared.WorkflowTemplateInput;
    security: DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineSecurity;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
