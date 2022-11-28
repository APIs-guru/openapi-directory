import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlSslCertsCreateEphemeralPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlSslCertsCreateEphemeralQueryParams extends SpeakeasyBase {
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
export declare class SqlSslCertsCreateEphemeralSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlSslCertsCreateEphemeralSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlSslCertsCreateEphemeralSecurity extends SpeakeasyBase {
    option1?: SqlSslCertsCreateEphemeralSecurityOption1;
    option2?: SqlSslCertsCreateEphemeralSecurityOption2;
}
export declare class SqlSslCertsCreateEphemeralRequest extends SpeakeasyBase {
    pathParams: SqlSslCertsCreateEphemeralPathParams;
    queryParams: SqlSslCertsCreateEphemeralQueryParams;
    request?: shared.SslCertsCreateEphemeralRequest;
    security: SqlSslCertsCreateEphemeralSecurity;
}
export declare class SqlSslCertsCreateEphemeralResponse extends SpeakeasyBase {
    contentType: string;
    sslCert?: shared.SslCert;
    statusCode: number;
}
