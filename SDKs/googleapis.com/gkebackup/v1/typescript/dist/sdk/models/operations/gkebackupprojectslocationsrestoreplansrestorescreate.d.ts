import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    restoreId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresCreateRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams;
    queryParams: GkebackupProjectsLocationsRestorePlansRestoresCreateQueryParams;
    request?: shared.RestoreInput;
    security: GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
