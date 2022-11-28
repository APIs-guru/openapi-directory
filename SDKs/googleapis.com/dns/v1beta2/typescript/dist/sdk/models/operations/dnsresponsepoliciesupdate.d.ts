import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePoliciesUpdatePathParams extends SpeakeasyBase {
    project: string;
    responsePolicy: string;
}
export declare class DnsResponsePoliciesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DnsResponsePoliciesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesUpdateSecurity extends SpeakeasyBase {
    option1?: DnsResponsePoliciesUpdateSecurityOption1;
    option2?: DnsResponsePoliciesUpdateSecurityOption2;
}
export declare class DnsResponsePoliciesUpdateRequest extends SpeakeasyBase {
    pathParams: DnsResponsePoliciesUpdatePathParams;
    queryParams: DnsResponsePoliciesUpdateQueryParams;
    request?: shared.ResponsePolicy;
    security: DnsResponsePoliciesUpdateSecurity;
}
export declare class DnsResponsePoliciesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    responsePoliciesUpdateResponse?: shared.ResponsePoliciesUpdateResponse;
    statusCode: number;
}
