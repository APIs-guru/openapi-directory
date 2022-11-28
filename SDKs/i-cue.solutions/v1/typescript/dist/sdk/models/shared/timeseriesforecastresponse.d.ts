import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";
export declare class TimeSeriesForecastResponse extends SpeakeasyBase {
    error?: number;
    forecastData?: PlanningLevelForecastResultData[];
    method?: string;
    timeSeriesId?: string;
}
