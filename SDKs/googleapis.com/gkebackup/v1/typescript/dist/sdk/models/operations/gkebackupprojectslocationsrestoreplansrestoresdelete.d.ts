import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    etag?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams;
    queryParams: GkebackupProjectsLocationsRestorePlansRestoresDeleteQueryParams;
    security: GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
