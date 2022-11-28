import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams extends SpeakeasyBase {
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
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListPathParams;
    queryParams: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListQueryParams;
    security: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse extends SpeakeasyBase {
    contentType: string;
    listVolumeRestoresResponse?: shared.ListVolumeRestoresResponse;
    statusCode: number;
}
