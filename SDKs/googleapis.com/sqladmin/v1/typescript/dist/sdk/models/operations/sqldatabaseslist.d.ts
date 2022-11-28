import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlDatabasesListPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlDatabasesListQueryParams extends SpeakeasyBase {
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
export declare class SqlDatabasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesListSecurity extends SpeakeasyBase {
    option1?: SqlDatabasesListSecurityOption1;
    option2?: SqlDatabasesListSecurityOption2;
}
export declare class SqlDatabasesListRequest extends SpeakeasyBase {
    pathParams: SqlDatabasesListPathParams;
    queryParams: SqlDatabasesListQueryParams;
    security: SqlDatabasesListSecurity;
}
export declare class SqlDatabasesListResponse extends SpeakeasyBase {
    contentType: string;
    databasesListResponse?: shared.DatabasesListResponse;
    statusCode: number;
}
