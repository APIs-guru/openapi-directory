import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BinaryauthorizationProjectsPolicySetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BinaryauthorizationProjectsPolicySetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BinaryauthorizationProjectsPolicySetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BinaryauthorizationProjectsPolicySetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BinaryauthorizationProjectsPolicySetIamPolicyPathParams;
    queryParams: BinaryauthorizationProjectsPolicySetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: BinaryauthorizationProjectsPolicySetIamPolicySecurity;
}
export declare class BinaryauthorizationProjectsPolicySetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    iamPolicy?: shared.IamPolicy;
    statusCode: number;
}
