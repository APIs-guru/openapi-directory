import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams;
    queryParams: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
