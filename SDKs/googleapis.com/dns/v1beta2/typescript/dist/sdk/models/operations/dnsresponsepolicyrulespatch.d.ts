import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePolicyRulesPatchPathParams extends SpeakeasyBase {
    project: string;
    responsePolicy: string;
    responsePolicyRule: string;
}
export declare class DnsResponsePolicyRulesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientOperationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsResponsePolicyRulesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesPatchSecurity extends SpeakeasyBase {
    option1?: DnsResponsePolicyRulesPatchSecurityOption1;
    option2?: DnsResponsePolicyRulesPatchSecurityOption2;
}
export declare class DnsResponsePolicyRulesPatchRequest extends SpeakeasyBase {
    pathParams: DnsResponsePolicyRulesPatchPathParams;
    queryParams: DnsResponsePolicyRulesPatchQueryParams;
    request?: shared.ResponsePolicyRule;
    security: DnsResponsePolicyRulesPatchSecurity;
}
export declare class DnsResponsePolicyRulesPatchResponse extends SpeakeasyBase {
    contentType: string;
    responsePolicyRulesPatchResponse?: shared.ResponsePolicyRulesPatchResponse;
    statusCode: number;
}
