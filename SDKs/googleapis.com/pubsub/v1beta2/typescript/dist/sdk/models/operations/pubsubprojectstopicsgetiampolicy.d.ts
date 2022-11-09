import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class PubsubProjectsTopicsGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubProjectsTopicsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsGetIamPolicySecurityOption1;
    option2?: PubsubProjectsTopicsGetIamPolicySecurityOption2;
}
export declare class PubsubProjectsTopicsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsGetIamPolicyPathParams;
    queryParams: PubsubProjectsTopicsGetIamPolicyQueryParams;
    security: PubsubProjectsTopicsGetIamPolicySecurity;
}
export declare class PubsubProjectsTopicsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
