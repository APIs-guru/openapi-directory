import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsJobsRunPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunProjectsLocationsJobsRunQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsJobsRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsJobsRunRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsJobsRunPathParams;
    queryParams: RunProjectsLocationsJobsRunQueryParams;
    request?: shared.GoogleCloudRunV2RunJobRequest;
    security: RunProjectsLocationsJobsRunSecurity;
}
export declare class RunProjectsLocationsJobsRunResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
