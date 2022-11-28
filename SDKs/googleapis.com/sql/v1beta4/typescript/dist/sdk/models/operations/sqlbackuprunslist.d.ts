import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlBackupRunsListPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlBackupRunsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SqlBackupRunsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlBackupRunsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlBackupRunsListSecurity extends SpeakeasyBase {
    option1?: SqlBackupRunsListSecurityOption1;
    option2?: SqlBackupRunsListSecurityOption2;
}
export declare class SqlBackupRunsListRequest extends SpeakeasyBase {
    pathParams: SqlBackupRunsListPathParams;
    queryParams: SqlBackupRunsListQueryParams;
    security: SqlBackupRunsListSecurity;
}
export declare class SqlBackupRunsListResponse extends SpeakeasyBase {
    backupRunsListResponse?: shared.BackupRunsListResponse;
    contentType: string;
    statusCode: number;
}
