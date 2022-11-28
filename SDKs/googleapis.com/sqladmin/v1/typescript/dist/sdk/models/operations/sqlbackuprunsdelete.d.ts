import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlBackupRunsDeletePathParams extends SpeakeasyBase {
    id: string;
    instance: string;
    project: string;
}
export declare class SqlBackupRunsDeleteQueryParams extends SpeakeasyBase {
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
export declare class SqlBackupRunsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlBackupRunsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlBackupRunsDeleteSecurity extends SpeakeasyBase {
    option1?: SqlBackupRunsDeleteSecurityOption1;
    option2?: SqlBackupRunsDeleteSecurityOption2;
}
export declare class SqlBackupRunsDeleteRequest extends SpeakeasyBase {
    pathParams: SqlBackupRunsDeletePathParams;
    queryParams: SqlBackupRunsDeleteQueryParams;
    security: SqlBackupRunsDeleteSecurity;
}
export declare class SqlBackupRunsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
