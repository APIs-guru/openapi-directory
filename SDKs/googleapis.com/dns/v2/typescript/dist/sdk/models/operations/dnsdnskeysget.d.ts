import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsDnsKeysGetPathParams extends SpeakeasyBase {
    dnsKeyId: string;
    location: string;
    managedZone: string;
    project: string;
}
export declare class DnsDnsKeysGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientOperationId?: string;
    digestType?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsDnsKeysGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsDnsKeysGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsDnsKeysGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsDnsKeysGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsDnsKeysGetSecurity extends SpeakeasyBase {
    option1?: DnsDnsKeysGetSecurityOption1;
    option2?: DnsDnsKeysGetSecurityOption2;
    option3?: DnsDnsKeysGetSecurityOption3;
    option4?: DnsDnsKeysGetSecurityOption4;
}
export declare class DnsDnsKeysGetRequest extends SpeakeasyBase {
    pathParams: DnsDnsKeysGetPathParams;
    queryParams: DnsDnsKeysGetQueryParams;
    security: DnsDnsKeysGetSecurity;
}
export declare class DnsDnsKeysGetResponse extends SpeakeasyBase {
    contentType: string;
    dnsKey?: shared.DnsKey;
    statusCode: number;
}
