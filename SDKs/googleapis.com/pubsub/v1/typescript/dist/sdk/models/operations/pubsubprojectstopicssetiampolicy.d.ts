import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class PubsubProjectsTopicsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsTopicsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsSetIamPolicySecurityOption1;
    option2?: PubsubProjectsTopicsSetIamPolicySecurityOption2;
}
export declare class PubsubProjectsTopicsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsSetIamPolicyPathParams;
    queryParams: PubsubProjectsTopicsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: PubsubProjectsTopicsSetIamPolicySecurity;
}
export declare class PubsubProjectsTopicsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
