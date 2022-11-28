import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsGetMetricsPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare enum ScriptProjectsGetMetricsMetricsGranularityEnum {
    UnspecifiedGranularity = "UNSPECIFIED_GRANULARITY",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
export declare class ScriptProjectsGetMetricsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    metricsFilterDeploymentId?: string;
    metricsGranularity?: ScriptProjectsGetMetricsMetricsGranularityEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ScriptProjectsGetMetricsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsGetMetricsRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsGetMetricsPathParams;
    queryParams: ScriptProjectsGetMetricsQueryParams;
    security: ScriptProjectsGetMetricsSecurity;
}
export declare class ScriptProjectsGetMetricsResponse extends SpeakeasyBase {
    contentType: string;
    metrics?: shared.Metrics;
    statusCode: number;
}
