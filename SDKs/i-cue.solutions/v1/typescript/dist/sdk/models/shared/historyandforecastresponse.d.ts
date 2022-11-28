import { SpeakeasyBase } from "../../../internal/utils";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesHistoryAndForecastResponse } from "./timeserieshistoryandforecastresponse";
export declare class HistoryAndForecastResponse extends SpeakeasyBase {
    hyperparameters?: ForecastHyperparameterResponse;
    timeSeries?: TimeSeriesHistoryAndForecastResponse[];
}
