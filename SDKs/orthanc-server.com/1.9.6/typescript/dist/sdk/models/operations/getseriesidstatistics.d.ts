import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdStatisticsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdStatisticsRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdStatisticsPathParams;
}
export declare class GetSeriesIdStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesIdStatistics200ApplicationJsonAny?: any;
    statusCode: number;
}
