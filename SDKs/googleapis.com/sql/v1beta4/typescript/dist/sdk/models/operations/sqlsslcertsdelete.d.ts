import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlSslCertsDeletePathParams extends SpeakeasyBase {
    instance: string;
    project: string;
    sha1Fingerprint: string;
}
export declare class SqlSslCertsDeleteQueryParams extends SpeakeasyBase {
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
export declare class SqlSslCertsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlSslCertsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlSslCertsDeleteSecurity extends SpeakeasyBase {
    option1?: SqlSslCertsDeleteSecurityOption1;
    option2?: SqlSslCertsDeleteSecurityOption2;
}
export declare class SqlSslCertsDeleteRequest extends SpeakeasyBase {
    pathParams: SqlSslCertsDeletePathParams;
    queryParams: SqlSslCertsDeleteQueryParams;
    security: SqlSslCertsDeleteSecurity;
}
export declare class SqlSslCertsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
