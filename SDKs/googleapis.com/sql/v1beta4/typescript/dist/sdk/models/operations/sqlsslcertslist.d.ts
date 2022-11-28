import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlSslCertsListPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlSslCertsListQueryParams extends SpeakeasyBase {
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
export declare class SqlSslCertsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlSslCertsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlSslCertsListSecurity extends SpeakeasyBase {
    option1?: SqlSslCertsListSecurityOption1;
    option2?: SqlSslCertsListSecurityOption2;
}
export declare class SqlSslCertsListRequest extends SpeakeasyBase {
    pathParams: SqlSslCertsListPathParams;
    queryParams: SqlSslCertsListQueryParams;
    security: SqlSslCertsListSecurity;
}
export declare class SqlSslCertsListResponse extends SpeakeasyBase {
    contentType: string;
    sslCertsListResponse?: shared.SslCertsListResponse;
    statusCode: number;
}
