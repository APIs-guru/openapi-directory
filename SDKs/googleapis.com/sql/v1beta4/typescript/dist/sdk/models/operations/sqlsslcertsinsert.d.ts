import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlSslCertsInsertPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlSslCertsInsertQueryParams extends SpeakeasyBase {
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
export declare class SqlSslCertsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlSslCertsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlSslCertsInsertSecurity extends SpeakeasyBase {
    option1?: SqlSslCertsInsertSecurityOption1;
    option2?: SqlSslCertsInsertSecurityOption2;
}
export declare class SqlSslCertsInsertRequest extends SpeakeasyBase {
    pathParams: SqlSslCertsInsertPathParams;
    queryParams: SqlSslCertsInsertQueryParams;
    request?: shared.SslCertsInsertRequest;
    security: SqlSslCertsInsertSecurity;
}
export declare class SqlSslCertsInsertResponse extends SpeakeasyBase {
    contentType: string;
    sslCertsInsertResponse?: shared.SslCertsInsertResponse;
    statusCode: number;
}
