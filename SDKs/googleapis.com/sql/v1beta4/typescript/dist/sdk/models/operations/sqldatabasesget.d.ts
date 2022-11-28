import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlDatabasesGetPathParams extends SpeakeasyBase {
    database: string;
    instance: string;
    project: string;
}
export declare class SqlDatabasesGetQueryParams extends SpeakeasyBase {
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
export declare class SqlDatabasesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesGetSecurity extends SpeakeasyBase {
    option1?: SqlDatabasesGetSecurityOption1;
    option2?: SqlDatabasesGetSecurityOption2;
}
export declare class SqlDatabasesGetRequest extends SpeakeasyBase {
    pathParams: SqlDatabasesGetPathParams;
    queryParams: SqlDatabasesGetQueryParams;
    security: SqlDatabasesGetSecurity;
}
export declare class SqlDatabasesGetResponse extends SpeakeasyBase {
    contentType: string;
    database?: shared.Database;
    statusCode: number;
}
