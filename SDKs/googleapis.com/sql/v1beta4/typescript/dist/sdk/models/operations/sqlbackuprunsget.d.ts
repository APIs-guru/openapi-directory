import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlBackupRunsGetPathParams extends SpeakeasyBase {
    id: string;
    instance: string;
    project: string;
}
export declare class SqlBackupRunsGetQueryParams extends SpeakeasyBase {
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
export declare class SqlBackupRunsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlBackupRunsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlBackupRunsGetSecurity extends SpeakeasyBase {
    option1?: SqlBackupRunsGetSecurityOption1;
    option2?: SqlBackupRunsGetSecurityOption2;
}
export declare class SqlBackupRunsGetRequest extends SpeakeasyBase {
    pathParams: SqlBackupRunsGetPathParams;
    queryParams: SqlBackupRunsGetQueryParams;
    security: SqlBackupRunsGetSecurity;
}
export declare class SqlBackupRunsGetResponse extends SpeakeasyBase {
    backupRun?: shared.BackupRun;
    contentType: string;
    statusCode: number;
}
