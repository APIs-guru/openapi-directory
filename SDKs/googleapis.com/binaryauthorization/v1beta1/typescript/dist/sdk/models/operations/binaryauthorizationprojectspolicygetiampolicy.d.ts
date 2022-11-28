import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BinaryauthorizationProjectsPolicyGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BinaryauthorizationProjectsPolicyGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BinaryauthorizationProjectsPolicyGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BinaryauthorizationProjectsPolicyGetIamPolicyPathParams;
    queryParams: BinaryauthorizationProjectsPolicyGetIamPolicyQueryParams;
    security: BinaryauthorizationProjectsPolicyGetIamPolicySecurity;
}
export declare class BinaryauthorizationProjectsPolicyGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    iamPolicy?: shared.IamPolicy;
    statusCode: number;
}
