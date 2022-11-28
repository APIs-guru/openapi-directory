import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMetricPathParams extends SpeakeasyBase {
    metricId: string;
}
export declare class GetMetricSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetMetricRequest extends SpeakeasyBase {
    pathParams: GetMetricPathParams;
    security: GetMetricSecurity;
}
export declare class GetMetricResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    metric?: shared.Metric;
}
