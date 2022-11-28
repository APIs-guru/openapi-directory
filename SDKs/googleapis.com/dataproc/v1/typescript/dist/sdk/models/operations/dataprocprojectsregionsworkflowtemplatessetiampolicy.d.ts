import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyPathParams;
    queryParams: DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
