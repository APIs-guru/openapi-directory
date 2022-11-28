import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSeriesTimersQueryParams extends SpeakeasyBase {
    sortBy?: string;
    sortOrder?: shared.SortOrderEnum;
}
export declare class GetSeriesTimersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSeriesTimersRequest extends SpeakeasyBase {
    queryParams: GetSeriesTimersQueryParams;
    security: GetSeriesTimersSecurity;
}
export declare class GetSeriesTimersResponse extends SpeakeasyBase {
    contentType: string;
    seriesTimerInfoDtoQueryResult?: shared.SeriesTimerInfoDtoQueryResult;
    statusCode: number;
}
