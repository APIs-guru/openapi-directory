import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsRestorePlansListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkebackupProjectsLocationsRestorePlansListQueryParams extends SpeakeasyBase {
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
export declare class GkebackupProjectsLocationsRestorePlansListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsRestorePlansListRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsRestorePlansListPathParams;
    queryParams: GkebackupProjectsLocationsRestorePlansListQueryParams;
    security: GkebackupProjectsLocationsRestorePlansListSecurity;
}
export declare class GkebackupProjectsLocationsRestorePlansListResponse extends SpeakeasyBase {
    contentType: string;
    listRestorePlansResponse?: shared.ListRestorePlansResponse;
    statusCode: number;
}
