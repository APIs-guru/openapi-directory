import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams;
    queryParams: GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListQueryParams;
    security: GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse extends SpeakeasyBase {
    contentType: string;
    listVolumeBackupsResponse?: shared.ListVolumeBackupsResponse;
    statusCode: number;
}
