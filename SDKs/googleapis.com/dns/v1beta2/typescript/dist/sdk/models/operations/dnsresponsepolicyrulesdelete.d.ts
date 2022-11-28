import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePolicyRulesDeletePathParams extends SpeakeasyBase {
    project: string;
    responsePolicy: string;
    responsePolicyRule: string;
}
export declare class DnsResponsePolicyRulesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DnsResponsePolicyRulesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesDeleteSecurity extends SpeakeasyBase {
    option1?: DnsResponsePolicyRulesDeleteSecurityOption1;
    option2?: DnsResponsePolicyRulesDeleteSecurityOption2;
}
export declare class DnsResponsePolicyRulesDeleteRequest extends SpeakeasyBase {
    pathParams: DnsResponsePolicyRulesDeletePathParams;
    queryParams: DnsResponsePolicyRulesDeleteQueryParams;
    security: DnsResponsePolicyRulesDeleteSecurity;
}
export declare class DnsResponsePolicyRulesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
