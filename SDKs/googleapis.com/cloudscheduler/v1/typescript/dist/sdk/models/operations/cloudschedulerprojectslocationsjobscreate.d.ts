import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudschedulerProjectsLocationsJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudschedulerProjectsLocationsJobsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudschedulerProjectsLocationsJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudschedulerProjectsLocationsJobsCreateRequest extends SpeakeasyBase {
    pathParams: CloudschedulerProjectsLocationsJobsCreatePathParams;
    queryParams: CloudschedulerProjectsLocationsJobsCreateQueryParams;
    request?: shared.Job;
    security: CloudschedulerProjectsLocationsJobsCreateSecurity;
}
export declare class CloudschedulerProjectsLocationsJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
