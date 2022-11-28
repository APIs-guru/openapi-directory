import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsWorkflowTemplatesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyPathParams;
    queryParams: DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: DataprocProjectsRegionsWorkflowTemplatesGetIamPolicySecurity;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
