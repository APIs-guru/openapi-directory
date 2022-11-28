import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePoliciesCreatePathParams extends SpeakeasyBase {
    project: string;
}
export declare class DnsResponsePoliciesCreateQueryParams extends SpeakeasyBase {
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
export declare class DnsResponsePoliciesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesCreateSecurity extends SpeakeasyBase {
    option1?: DnsResponsePoliciesCreateSecurityOption1;
    option2?: DnsResponsePoliciesCreateSecurityOption2;
}
export declare class DnsResponsePoliciesCreateRequest extends SpeakeasyBase {
    pathParams: DnsResponsePoliciesCreatePathParams;
    queryParams: DnsResponsePoliciesCreateQueryParams;
    request?: shared.ResponsePolicy;
    security: DnsResponsePoliciesCreateSecurity;
}
export declare class DnsResponsePoliciesCreateResponse extends SpeakeasyBase {
    contentType: string;
    responsePolicy?: shared.ResponsePolicy;
    statusCode: number;
}
