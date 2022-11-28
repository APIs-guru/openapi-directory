import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlDatabasesUpdatePathParams extends SpeakeasyBase {
    database: string;
    instance: string;
    project: string;
}
export declare class SqlDatabasesUpdateQueryParams extends SpeakeasyBase {
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
export declare class SqlDatabasesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesUpdateSecurity extends SpeakeasyBase {
    option1?: SqlDatabasesUpdateSecurityOption1;
    option2?: SqlDatabasesUpdateSecurityOption2;
}
export declare class SqlDatabasesUpdateRequest extends SpeakeasyBase {
    pathParams: SqlDatabasesUpdatePathParams;
    queryParams: SqlDatabasesUpdateQueryParams;
    request?: shared.Database;
    security: SqlDatabasesUpdateSecurity;
}
export declare class SqlDatabasesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
