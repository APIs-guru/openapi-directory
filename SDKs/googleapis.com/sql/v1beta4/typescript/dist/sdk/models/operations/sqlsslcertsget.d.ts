import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlSslCertsGetPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
    sha1Fingerprint: string;
}
export declare class SqlSslCertsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SqlSslCertsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlSslCertsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlSslCertsGetSecurity extends SpeakeasyBase {
    option1?: SqlSslCertsGetSecurityOption1;
    option2?: SqlSslCertsGetSecurityOption2;
}
export declare class SqlSslCertsGetRequest extends SpeakeasyBase {
    pathParams: SqlSslCertsGetPathParams;
    queryParams: SqlSslCertsGetQueryParams;
    security: SqlSslCertsGetSecurity;
}
export declare class SqlSslCertsGetResponse extends SpeakeasyBase {
    contentType: string;
    sslCert?: shared.SslCert;
    statusCode: number;
}
