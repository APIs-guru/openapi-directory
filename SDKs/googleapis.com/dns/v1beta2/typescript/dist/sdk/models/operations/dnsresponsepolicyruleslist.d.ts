import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePolicyRulesListPathParams extends SpeakeasyBase {
    project: string;
    responsePolicy: string;
}
export declare class DnsResponsePolicyRulesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsResponsePolicyRulesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePolicyRulesListSecurity extends SpeakeasyBase {
    option1?: DnsResponsePolicyRulesListSecurityOption1;
    option2?: DnsResponsePolicyRulesListSecurityOption2;
    option3?: DnsResponsePolicyRulesListSecurityOption3;
    option4?: DnsResponsePolicyRulesListSecurityOption4;
}
export declare class DnsResponsePolicyRulesListRequest extends SpeakeasyBase {
    pathParams: DnsResponsePolicyRulesListPathParams;
    queryParams: DnsResponsePolicyRulesListQueryParams;
    security: DnsResponsePolicyRulesListSecurity;
}
export declare class DnsResponsePolicyRulesListResponse extends SpeakeasyBase {
    contentType: string;
    responsePolicyRulesListResponse?: shared.ResponsePolicyRulesListResponse;
    statusCode: number;
}
