import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsBackupPlansBackupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsListQueryParams extends SpeakeasyBase {
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
export declare class GkebackupProjectsLocationsBackupPlansBackupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsListRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsBackupPlansBackupsListPathParams;
    queryParams: GkebackupProjectsLocationsBackupPlansBackupsListQueryParams;
    security: GkebackupProjectsLocationsBackupPlansBackupsListSecurity;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsListResponse extends SpeakeasyBase {
    contentType: string;
    listBackupsResponse?: shared.ListBackupsResponse;
    statusCode: number;
}
