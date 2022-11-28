import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsGetMetricsPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class DataflowProjectsJobsGetMetricsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    location?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsJobsGetMetricsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsGetMetricsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsGetMetricsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsGetMetricsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsGetMetricsSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsGetMetricsSecurityOption1;
    option2?: DataflowProjectsJobsGetMetricsSecurityOption2;
    option3?: DataflowProjectsJobsGetMetricsSecurityOption3;
    option4?: DataflowProjectsJobsGetMetricsSecurityOption4;
}
export declare class DataflowProjectsJobsGetMetricsRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsGetMetricsPathParams;
    queryParams: DataflowProjectsJobsGetMetricsQueryParams;
    security: DataflowProjectsJobsGetMetricsSecurity;
}
export declare class DataflowProjectsJobsGetMetricsResponse extends SpeakeasyBase {
    contentType: string;
    jobMetrics?: shared.JobMetrics;
    statusCode: number;
}
