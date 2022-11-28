import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlDatabasesInsertPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlDatabasesInsertQueryParams extends SpeakeasyBase {
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
export declare class SqlDatabasesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesInsertSecurity extends SpeakeasyBase {
    option1?: SqlDatabasesInsertSecurityOption1;
    option2?: SqlDatabasesInsertSecurityOption2;
}
export declare class SqlDatabasesInsertRequest extends SpeakeasyBase {
    pathParams: SqlDatabasesInsertPathParams;
    queryParams: SqlDatabasesInsertQueryParams;
    request?: shared.Database;
    security: SqlDatabasesInsertSecurity;
}
export declare class SqlDatabasesInsertResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
