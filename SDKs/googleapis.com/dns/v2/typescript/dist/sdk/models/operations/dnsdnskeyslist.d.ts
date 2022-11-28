import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsDnsKeysListPathParams extends SpeakeasyBase {
    location: string;
    managedZone: string;
    project: string;
}
export declare class DnsDnsKeysListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    digestType?: string;
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
export declare class DnsDnsKeysListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsDnsKeysListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsDnsKeysListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsDnsKeysListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsDnsKeysListSecurity extends SpeakeasyBase {
    option1?: DnsDnsKeysListSecurityOption1;
    option2?: DnsDnsKeysListSecurityOption2;
    option3?: DnsDnsKeysListSecurityOption3;
    option4?: DnsDnsKeysListSecurityOption4;
}
export declare class DnsDnsKeysListRequest extends SpeakeasyBase {
    pathParams: DnsDnsKeysListPathParams;
    queryParams: DnsDnsKeysListQueryParams;
    security: DnsDnsKeysListSecurity;
}
export declare class DnsDnsKeysListResponse extends SpeakeasyBase {
    contentType: string;
    dnsKeysListResponse?: shared.DnsKeysListResponse;
    statusCode: number;
}
