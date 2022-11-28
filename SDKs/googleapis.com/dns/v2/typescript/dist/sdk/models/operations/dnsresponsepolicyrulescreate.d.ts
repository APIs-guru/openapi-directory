import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePolicyRulesCreatePathParams extends SpeakeasyBase {
    location: string;
    project: string;
    responsePolicy: string;
}
export declare class DnsResponsePolicyRulesCreateQueryParams extends SpeakeasyBase {
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
export declare class DnsResponsePolicyRulesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesCreateSecurity extends SpeakeasyBase {
    option1?: DnsResponsePolicyRulesCreateSecurityOption1;
    option2?: DnsResponsePolicyRulesCreateSecurityOption2;
}
export declare class DnsResponsePolicyRulesCreateRequest extends SpeakeasyBase {
    pathParams: DnsResponsePolicyRulesCreatePathParams;
    queryParams: DnsResponsePolicyRulesCreateQueryParams;
    request?: shared.ResponsePolicyRule;
    security: DnsResponsePolicyRulesCreateSecurity;
}
export declare class DnsResponsePolicyRulesCreateResponse extends SpeakeasyBase {
    contentType: string;
    responsePolicyRule?: shared.ResponsePolicyRule;
    statusCode: number;
}
