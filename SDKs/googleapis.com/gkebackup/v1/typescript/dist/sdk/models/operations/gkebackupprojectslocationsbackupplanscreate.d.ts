import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsBackupPlansCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkebackupProjectsLocationsBackupPlansCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    backupPlanId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkebackupProjectsLocationsBackupPlansCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsBackupPlansCreateRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsBackupPlansCreatePathParams;
    queryParams: GkebackupProjectsLocationsBackupPlansCreateQueryParams;
    request?: shared.BackupPlan;
    security: GkebackupProjectsLocationsBackupPlansCreateSecurity;
}
export declare class GkebackupProjectsLocationsBackupPlansCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
