import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesGetIamPolicySecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesGetIamPolicySecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesGetIamPolicyPathParams;
    queryParams: SpannerProjectsInstancesDatabasesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: SpannerProjectsInstancesDatabasesGetIamPolicySecurity;
}
export declare class SpannerProjectsInstancesDatabasesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
