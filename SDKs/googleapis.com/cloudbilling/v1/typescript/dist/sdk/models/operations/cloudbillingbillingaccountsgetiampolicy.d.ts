import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbillingBillingAccountsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudbillingBillingAccountsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudbillingBillingAccountsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsGetIamPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: CloudbillingBillingAccountsGetIamPolicySecurityOption1;
    option2?: CloudbillingBillingAccountsGetIamPolicySecurityOption2;
    option3?: CloudbillingBillingAccountsGetIamPolicySecurityOption3;
}
export declare class CloudbillingBillingAccountsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudbillingBillingAccountsGetIamPolicyPathParams;
    queryParams: CloudbillingBillingAccountsGetIamPolicyQueryParams;
    security: CloudbillingBillingAccountsGetIamPolicySecurity;
}
export declare class CloudbillingBillingAccountsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
