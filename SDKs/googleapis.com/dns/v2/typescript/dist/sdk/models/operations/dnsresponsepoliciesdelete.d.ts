import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePoliciesDeletePathParams extends SpeakeasyBase {
    location: string;
    project: string;
    responsePolicy: string;
}
export declare class DnsResponsePoliciesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DnsResponsePoliciesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesDeleteSecurity extends SpeakeasyBase {
    option1?: DnsResponsePoliciesDeleteSecurityOption1;
    option2?: DnsResponsePoliciesDeleteSecurityOption2;
}
export declare class DnsResponsePoliciesDeleteRequest extends SpeakeasyBase {
    pathParams: DnsResponsePoliciesDeletePathParams;
    queryParams: DnsResponsePoliciesDeleteQueryParams;
    security: DnsResponsePoliciesDeleteSecurity;
}
export declare class DnsResponsePoliciesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
