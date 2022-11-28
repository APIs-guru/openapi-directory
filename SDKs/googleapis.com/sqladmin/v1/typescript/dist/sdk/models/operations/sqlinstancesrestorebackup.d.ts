import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesRestoreBackupPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesRestoreBackupQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesRestoreBackupSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesRestoreBackupSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesRestoreBackupSecurity extends SpeakeasyBase {
    option1?: SqlInstancesRestoreBackupSecurityOption1;
    option2?: SqlInstancesRestoreBackupSecurityOption2;
}
export declare class SqlInstancesRestoreBackupRequest extends SpeakeasyBase {
    pathParams: SqlInstancesRestoreBackupPathParams;
    queryParams: SqlInstancesRestoreBackupQueryParams;
    request?: shared.InstancesRestoreBackupRequest;
    security: SqlInstancesRestoreBackupSecurity;
}
export declare class SqlInstancesRestoreBackupResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
