import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudschedulerProjectsLocationsJobsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudschedulerProjectsLocationsJobsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    legacyAppEngineCron?: boolean;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudschedulerProjectsLocationsJobsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudschedulerProjectsLocationsJobsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudschedulerProjectsLocationsJobsDeletePathParams;
    queryParams: CloudschedulerProjectsLocationsJobsDeleteQueryParams;
    security: CloudschedulerProjectsLocationsJobsDeleteSecurity;
}
export declare class CloudschedulerProjectsLocationsJobsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
