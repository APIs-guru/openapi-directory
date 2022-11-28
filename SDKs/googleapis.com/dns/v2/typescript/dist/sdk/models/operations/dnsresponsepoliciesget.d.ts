import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePoliciesGetPathParams extends SpeakeasyBase {
    location: string;
    project: string;
    responsePolicy: string;
}
export declare class DnsResponsePoliciesGetQueryParams extends SpeakeasyBase {
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
export declare class DnsResponsePoliciesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesGetSecurity extends SpeakeasyBase {
    option1?: DnsResponsePoliciesGetSecurityOption1;
    option2?: DnsResponsePoliciesGetSecurityOption2;
    option3?: DnsResponsePoliciesGetSecurityOption3;
    option4?: DnsResponsePoliciesGetSecurityOption4;
}
export declare class DnsResponsePoliciesGetRequest extends SpeakeasyBase {
    pathParams: DnsResponsePoliciesGetPathParams;
    queryParams: DnsResponsePoliciesGetQueryParams;
    security: DnsResponsePoliciesGetSecurity;
}
export declare class DnsResponsePoliciesGetResponse extends SpeakeasyBase {
    contentType: string;
    responsePolicy?: shared.ResponsePolicy;
    statusCode: number;
}
