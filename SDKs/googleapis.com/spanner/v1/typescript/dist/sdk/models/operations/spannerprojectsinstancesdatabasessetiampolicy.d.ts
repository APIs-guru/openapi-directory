import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSetIamPolicySecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSetIamPolicySecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSetIamPolicyPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: SpannerProjectsInstancesDatabasesSetIamPolicySecurity;
}
export declare class SpannerProjectsInstancesDatabasesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
