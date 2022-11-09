import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    backupId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsCreateRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams;
    queryParams: GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams;
    request?: shared.Backup;
    security: GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
