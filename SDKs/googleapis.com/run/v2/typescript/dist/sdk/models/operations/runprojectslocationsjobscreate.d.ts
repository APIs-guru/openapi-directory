import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsJobsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    jobId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class RunProjectsLocationsJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsJobsCreateRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsJobsCreatePathParams;
    queryParams: RunProjectsLocationsJobsCreateQueryParams;
    request?: shared.GoogleCloudRunV2JobInput;
    security: RunProjectsLocationsJobsCreateSecurity;
}
export declare class RunProjectsLocationsJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
