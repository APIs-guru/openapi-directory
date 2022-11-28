import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetQueryParams extends SpeakeasyBase {
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
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetPathParams;
    queryParams: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetQueryParams;
    security: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetSecurity;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumeRestore?: shared.VolumeRestore;
}
