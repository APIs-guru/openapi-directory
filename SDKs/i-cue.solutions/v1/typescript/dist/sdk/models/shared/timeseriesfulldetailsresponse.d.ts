import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";
import { ForecastOptimalParametersResponse } from "./forecastoptimalparametersresponse";
import { OutlierResponse } from "./outlierresponse";
export declare class TimeSeriesFullDetailsResponse extends SpeakeasyBase {
    error?: number;
    forecastData?: PlanningLevelForecastResultData[];
    historyData?: PlanningLevelForecastResultData[];
    method?: string;
    optimalParameters?: ForecastOptimalParametersResponse;
    outliers?: OutlierResponse[];
    timeSeriesId?: string;
}
