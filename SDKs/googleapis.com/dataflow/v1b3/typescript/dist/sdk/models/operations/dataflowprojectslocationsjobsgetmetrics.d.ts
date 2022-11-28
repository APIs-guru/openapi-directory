import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsGetMetricsPathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsJobsGetMetricsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsLocationsJobsGetMetricsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetMetricsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetMetricsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetMetricsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetMetricsSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsGetMetricsSecurityOption1;
    option2?: DataflowProjectsLocationsJobsGetMetricsSecurityOption2;
    option3?: DataflowProjectsLocationsJobsGetMetricsSecurityOption3;
    option4?: DataflowProjectsLocationsJobsGetMetricsSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsGetMetricsRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsGetMetricsPathParams;
    queryParams: DataflowProjectsLocationsJobsGetMetricsQueryParams;
    security: DataflowProjectsLocationsJobsGetMetricsSecurity;
}
export declare class DataflowProjectsLocationsJobsGetMetricsResponse extends SpeakeasyBase {
    contentType: string;
    jobMetrics?: shared.JobMetrics;
    statusCode: number;
}
