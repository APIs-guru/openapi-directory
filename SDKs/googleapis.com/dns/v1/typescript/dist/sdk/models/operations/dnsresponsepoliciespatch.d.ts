import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePoliciesPatchPathParams extends SpeakeasyBase {
    project: string;
    responsePolicy: string;
}
export declare class DnsResponsePoliciesPatchQueryParams extends SpeakeasyBase {
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
export declare class DnsResponsePoliciesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesPatchSecurity extends SpeakeasyBase {
    option1?: DnsResponsePoliciesPatchSecurityOption1;
    option2?: DnsResponsePoliciesPatchSecurityOption2;
}
export declare class DnsResponsePoliciesPatchRequest extends SpeakeasyBase {
    pathParams: DnsResponsePoliciesPatchPathParams;
    queryParams: DnsResponsePoliciesPatchQueryParams;
    request?: shared.ResponsePolicy;
    security: DnsResponsePoliciesPatchSecurity;
}
export declare class DnsResponsePoliciesPatchResponse extends SpeakeasyBase {
    contentType: string;
    responsePoliciesPatchResponse?: shared.ResponsePoliciesPatchResponse;
    statusCode: number;
}
