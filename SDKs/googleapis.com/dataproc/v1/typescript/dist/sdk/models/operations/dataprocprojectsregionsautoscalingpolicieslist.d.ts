import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsAutoscalingPoliciesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataprocProjectsRegionsAutoscalingPoliciesListQueryParams extends SpeakeasyBase {
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
}
export declare class DataprocProjectsRegionsAutoscalingPoliciesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsAutoscalingPoliciesListRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsAutoscalingPoliciesListPathParams;
    queryParams: DataprocProjectsRegionsAutoscalingPoliciesListQueryParams;
    security: DataprocProjectsRegionsAutoscalingPoliciesListSecurity;
}
export declare class DataprocProjectsRegionsAutoscalingPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    listAutoscalingPoliciesResponse?: shared.ListAutoscalingPoliciesResponse;
    statusCode: number;
}
