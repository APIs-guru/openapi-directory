import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsRestorePlansRestoresListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresListQueryParams extends SpeakeasyBase {
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
export declare class GkebackupProjectsLocationsRestorePlansRestoresListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresListRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsRestorePlansRestoresListPathParams;
    queryParams: GkebackupProjectsLocationsRestorePlansRestoresListQueryParams;
    security: GkebackupProjectsLocationsRestorePlansRestoresListSecurity;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresListResponse extends SpeakeasyBase {
    contentType: string;
    listRestoresResponse?: shared.ListRestoresResponse;
    statusCode: number;
}
