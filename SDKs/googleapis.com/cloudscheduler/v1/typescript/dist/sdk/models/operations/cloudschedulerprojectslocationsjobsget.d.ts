import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudschedulerProjectsLocationsJobsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudschedulerProjectsLocationsJobsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudschedulerProjectsLocationsJobsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudschedulerProjectsLocationsJobsGetRequest extends SpeakeasyBase {
    pathParams: CloudschedulerProjectsLocationsJobsGetPathParams;
    queryParams: CloudschedulerProjectsLocationsJobsGetQueryParams;
    security: CloudschedulerProjectsLocationsJobsGetSecurity;
}
export declare class CloudschedulerProjectsLocationsJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
