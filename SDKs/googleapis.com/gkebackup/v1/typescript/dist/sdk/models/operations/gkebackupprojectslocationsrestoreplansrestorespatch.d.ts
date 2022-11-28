import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsRestorePlansRestoresPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresPatchRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsRestorePlansRestoresPatchPathParams;
    queryParams: GkebackupProjectsLocationsRestorePlansRestoresPatchQueryParams;
    request?: shared.RestoreInput;
    security: GkebackupProjectsLocationsRestorePlansRestoresPatchSecurity;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
