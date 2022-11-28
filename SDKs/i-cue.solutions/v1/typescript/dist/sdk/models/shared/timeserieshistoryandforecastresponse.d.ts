import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";
export declare class TimeSeriesHistoryAndForecastResponse extends SpeakeasyBase {
    error?: number;
    forecastData?: PlanningLevelForecastResultData[];
    historyData?: PlanningLevelForecastResultData[];
    method?: string;
    timeSeriesId?: string;
}
