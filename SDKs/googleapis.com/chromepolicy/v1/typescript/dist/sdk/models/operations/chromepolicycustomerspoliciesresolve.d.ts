import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesResolvePathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesResolveQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesResolveSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesResolveSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesResolveSecurity extends SpeakeasyBase {
    option1?: ChromepolicyCustomersPoliciesResolveSecurityOption1;
    option2?: ChromepolicyCustomersPoliciesResolveSecurityOption2;
}
export declare class ChromepolicyCustomersPoliciesResolveRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesResolvePathParams;
    queryParams: ChromepolicyCustomersPoliciesResolveQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1ResolveRequest;
    security: ChromepolicyCustomersPoliciesResolveSecurity;
}
export declare class ChromepolicyCustomersPoliciesResolveResponse extends SpeakeasyBase {
    contentType: string;
    googleChromePolicyVersionsV1ResolveResponse?: shared.GoogleChromePolicyVersionsV1ResolveResponse;
    statusCode: number;
}
