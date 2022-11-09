import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudschedulerProjectsLocationsJobsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudschedulerProjectsLocationsJobsPatchQueryParams extends SpeakeasyBase {
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
export declare class CloudschedulerProjectsLocationsJobsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudschedulerProjectsLocationsJobsPatchRequest extends SpeakeasyBase {
    pathParams: CloudschedulerProjectsLocationsJobsPatchPathParams;
    queryParams: CloudschedulerProjectsLocationsJobsPatchQueryParams;
    request?: shared.Job;
    security: CloudschedulerProjectsLocationsJobsPatchSecurity;
}
export declare class CloudschedulerProjectsLocationsJobsPatchResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
