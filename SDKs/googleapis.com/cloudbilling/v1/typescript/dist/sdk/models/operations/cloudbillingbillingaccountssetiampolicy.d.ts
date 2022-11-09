import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbillingBillingAccountsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudbillingBillingAccountsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudbillingBillingAccountsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: CloudbillingBillingAccountsSetIamPolicySecurityOption1;
    option2?: CloudbillingBillingAccountsSetIamPolicySecurityOption2;
}
export declare class CloudbillingBillingAccountsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudbillingBillingAccountsSetIamPolicyPathParams;
    queryParams: CloudbillingBillingAccountsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: CloudbillingBillingAccountsSetIamPolicySecurity;
}
export declare class CloudbillingBillingAccountsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
