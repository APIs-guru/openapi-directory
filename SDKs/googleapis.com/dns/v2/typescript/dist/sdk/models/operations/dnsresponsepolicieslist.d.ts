import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResponsePoliciesListPathParams extends SpeakeasyBase {
    location: string;
    project: string;
}
export declare class DnsResponsePoliciesListQueryParams extends SpeakeasyBase {
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
export declare class DnsResponsePoliciesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResponsePoliciesListSecurity extends SpeakeasyBase {
    option1?: DnsResponsePoliciesListSecurityOption1;
    option2?: DnsResponsePoliciesListSecurityOption2;
    option3?: DnsResponsePoliciesListSecurityOption3;
    option4?: DnsResponsePoliciesListSecurityOption4;
}
export declare class DnsResponsePoliciesListRequest extends SpeakeasyBase {
    pathParams: DnsResponsePoliciesListPathParams;
    queryParams: DnsResponsePoliciesListQueryParams;
    security: DnsResponsePoliciesListSecurity;
}
export declare class DnsResponsePoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    responsePoliciesListResponse?: shared.ResponsePoliciesListResponse;
    statusCode: number;
}
