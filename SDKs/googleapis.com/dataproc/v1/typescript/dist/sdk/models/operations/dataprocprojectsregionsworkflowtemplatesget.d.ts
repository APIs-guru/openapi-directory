import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsWorkflowTemplatesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    version?: number;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesGetRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsWorkflowTemplatesGetPathParams;
    queryParams: DataprocProjectsRegionsWorkflowTemplatesGetQueryParams;
    security: DataprocProjectsRegionsWorkflowTemplatesGetSecurity;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workflowTemplate?: shared.WorkflowTemplate;
}
