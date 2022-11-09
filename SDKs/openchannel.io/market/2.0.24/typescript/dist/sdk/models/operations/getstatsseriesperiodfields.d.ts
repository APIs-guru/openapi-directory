import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStatsSeriesPeriodFieldsPeriodEnum {
    Day = "day",
    Month = "month"
}
export declare class GetStatsSeriesPeriodFieldsPathParams extends SpeakeasyBase {
    fields: string;
    period: GetStatsSeriesPeriodFieldsPeriodEnum;
}
export declare class GetStatsSeriesPeriodFieldsQueryParams extends SpeakeasyBase {
    end?: number;
    query?: string;
    start?: number;
}
export declare class GetStatsSeriesPeriodFieldsRequest extends SpeakeasyBase {
    pathParams: GetStatsSeriesPeriodFieldsPathParams;
    queryParams: GetStatsSeriesPeriodFieldsQueryParams;
}
export declare class GetStatsSeriesPeriodFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
