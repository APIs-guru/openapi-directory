import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlDatabasesPatchPathParams extends SpeakeasyBase {
    database: string;
    instance: string;
    project: string;
}
export declare class SqlDatabasesPatchQueryParams extends SpeakeasyBase {
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
export declare class SqlDatabasesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlDatabasesPatchSecurity extends SpeakeasyBase {
    option1?: SqlDatabasesPatchSecurityOption1;
    option2?: SqlDatabasesPatchSecurityOption2;
}
export declare class SqlDatabasesPatchRequest extends SpeakeasyBase {
    pathParams: SqlDatabasesPatchPathParams;
    queryParams: SqlDatabasesPatchQueryParams;
    request?: shared.Database;
    security: SqlDatabasesPatchSecurity;
}
export declare class SqlDatabasesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
