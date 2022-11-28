import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMetricsSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetMetricsRequest extends SpeakeasyBase {
    security: GetMetricsSecurity;
}
export declare class GetMetricsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    metricsList?: shared.MetricsList;
}
