import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlBackupRunsInsertPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlBackupRunsInsertQueryParams extends SpeakeasyBase {
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
export declare class SqlBackupRunsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlBackupRunsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlBackupRunsInsertSecurity extends SpeakeasyBase {
    option1?: SqlBackupRunsInsertSecurityOption1;
    option2?: SqlBackupRunsInsertSecurityOption2;
}
export declare class SqlBackupRunsInsertRequest extends SpeakeasyBase {
    pathParams: SqlBackupRunsInsertPathParams;
    queryParams: SqlBackupRunsInsertQueryParams;
    request?: shared.BackupRun;
    security: SqlBackupRunsInsertSecurity;
}
export declare class SqlBackupRunsInsertResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
