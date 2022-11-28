import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsUpdatePathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsJobsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsJobsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsUpdateSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsUpdateSecurityOption1;
    option2?: DataflowProjectsLocationsJobsUpdateSecurityOption2;
    option3?: DataflowProjectsLocationsJobsUpdateSecurityOption3;
    option4?: DataflowProjectsLocationsJobsUpdateSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsUpdateRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsUpdatePathParams;
    queryParams: DataflowProjectsLocationsJobsUpdateQueryParams;
    request?: shared.JobInput;
    security: DataflowProjectsLocationsJobsUpdateSecurity;
}
export declare class DataflowProjectsLocationsJobsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
