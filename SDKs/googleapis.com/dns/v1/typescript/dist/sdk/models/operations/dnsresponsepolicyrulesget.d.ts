import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePolicyRulesGetPathParams extends SpeakeasyBase {
    project: string;
    responsePolicy: string;
    responsePolicyRule: string;
}
export declare class DnsResponsePolicyRulesGetQueryParams extends SpeakeasyBase {
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
export declare class DnsResponsePolicyRulesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesGetSecurity extends SpeakeasyBase {
    option1?: DnsResponsePolicyRulesGetSecurityOption1;
    option2?: DnsResponsePolicyRulesGetSecurityOption2;
    option3?: DnsResponsePolicyRulesGetSecurityOption3;
    option4?: DnsResponsePolicyRulesGetSecurityOption4;
}
export declare class DnsResponsePolicyRulesGetRequest extends SpeakeasyBase {
    pathParams: DnsResponsePolicyRulesGetPathParams;
    queryParams: DnsResponsePolicyRulesGetQueryParams;
    security: DnsResponsePolicyRulesGetSecurity;
}
export declare class DnsResponsePolicyRulesGetResponse extends SpeakeasyBase {
    contentType: string;
    responsePolicyRule?: shared.ResponsePolicyRule;
    statusCode: number;
}
