import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudschedulerProjectsLocationsJobsRunPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudschedulerProjectsLocationsJobsRunQueryParams extends SpeakeasyBase {
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
export declare class CloudschedulerProjectsLocationsJobsRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudschedulerProjectsLocationsJobsRunRequest extends SpeakeasyBase {
    pathParams: CloudschedulerProjectsLocationsJobsRunPathParams;
    queryParams: CloudschedulerProjectsLocationsJobsRunQueryParams;
    request?: shared.RunJobRequest;
    security: CloudschedulerProjectsLocationsJobsRunSecurity;
}
export declare class CloudschedulerProjectsLocationsJobsRunResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
