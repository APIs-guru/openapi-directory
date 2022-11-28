import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlDatabasesDeletePathParams extends SpeakeasyBase {
    database: string;
    instance: string;
    project: string;
}
export declare class SqlDatabasesDeleteQueryParams extends SpeakeasyBase {
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
export declare class SqlDatabasesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesDeleteSecurity extends SpeakeasyBase {
    option1?: SqlDatabasesDeleteSecurityOption1;
    option2?: SqlDatabasesDeleteSecurityOption2;
}
export declare class SqlDatabasesDeleteRequest extends SpeakeasyBase {
    pathParams: SqlDatabasesDeletePathParams;
    queryParams: SqlDatabasesDeleteQueryParams;
    security: SqlDatabasesDeleteSecurity;
}
export declare class SqlDatabasesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
