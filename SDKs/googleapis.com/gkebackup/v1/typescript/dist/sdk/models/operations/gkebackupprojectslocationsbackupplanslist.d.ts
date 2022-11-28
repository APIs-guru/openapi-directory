import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsBackupPlansListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkebackupProjectsLocationsBackupPlansListQueryParams extends SpeakeasyBase {
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
export declare class GkebackupProjectsLocationsBackupPlansListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsBackupPlansListRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsBackupPlansListPathParams;
    queryParams: GkebackupProjectsLocationsBackupPlansListQueryParams;
    security: GkebackupProjectsLocationsBackupPlansListSecurity;
}
export declare class GkebackupProjectsLocationsBackupPlansListResponse extends SpeakeasyBase {
    contentType: string;
    listBackupPlansResponse?: shared.ListBackupPlansResponse;
    statusCode: number;
}
