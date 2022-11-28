import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyPathParams;
    queryParams: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicySecurity;
}
export declare class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
