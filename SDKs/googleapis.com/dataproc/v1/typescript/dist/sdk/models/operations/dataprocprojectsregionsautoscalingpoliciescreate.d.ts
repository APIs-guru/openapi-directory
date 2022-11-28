import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsAutoscalingPoliciesCreateRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams;
    queryParams: DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams;
    request?: shared.AutoscalingPolicyInput;
    security: DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity;
}
export declare class DataprocProjectsRegionsAutoscalingPoliciesCreateResponse extends SpeakeasyBase {
    autoscalingPolicy?: shared.AutoscalingPolicy;
    contentType: string;
    statusCode: number;
}
