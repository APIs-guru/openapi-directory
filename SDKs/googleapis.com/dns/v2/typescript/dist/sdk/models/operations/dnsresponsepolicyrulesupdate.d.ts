import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePolicyRulesUpdatePathParams extends SpeakeasyBase {
    location: string;
    project: string;
    responsePolicy: string;
    responsePolicyRule: string;
}
export declare class DnsResponsePolicyRulesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DnsResponsePolicyRulesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesUpdateSecurity extends SpeakeasyBase {
    option1?: DnsResponsePolicyRulesUpdateSecurityOption1;
    option2?: DnsResponsePolicyRulesUpdateSecurityOption2;
}
export declare class DnsResponsePolicyRulesUpdateRequest extends SpeakeasyBase {
    pathParams: DnsResponsePolicyRulesUpdatePathParams;
    queryParams: DnsResponsePolicyRulesUpdateQueryParams;
    request?: shared.ResponsePolicyRule;
    security: DnsResponsePolicyRulesUpdateSecurity;
}
export declare class DnsResponsePolicyRulesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    responsePolicyRulesUpdateResponse?: shared.ResponsePolicyRulesUpdateResponse;
    statusCode: number;
}
