import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BinaryauthorizationSystempolicyGetPolicyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BinaryauthorizationSystempolicyGetPolicyQueryParams extends SpeakeasyBase {
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
export declare class BinaryauthorizationSystempolicyGetPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BinaryauthorizationSystempolicyGetPolicyRequest extends SpeakeasyBase {
    pathParams: BinaryauthorizationSystempolicyGetPolicyPathParams;
    queryParams: BinaryauthorizationSystempolicyGetPolicyQueryParams;
    security: BinaryauthorizationSystempolicyGetPolicySecurity;
}
export declare class BinaryauthorizationSystempolicyGetPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
