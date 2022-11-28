import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudschedulerProjectsLocationsJobsPausePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudschedulerProjectsLocationsJobsPauseQueryParams extends SpeakeasyBase {
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
export declare class CloudschedulerProjectsLocationsJobsPauseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudschedulerProjectsLocationsJobsPauseRequest extends SpeakeasyBase {
    pathParams: CloudschedulerProjectsLocationsJobsPausePathParams;
    queryParams: CloudschedulerProjectsLocationsJobsPauseQueryParams;
    request?: Map<string, any>;
    security: CloudschedulerProjectsLocationsJobsPauseSecurity;
}
export declare class CloudschedulerProjectsLocationsJobsPauseResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
