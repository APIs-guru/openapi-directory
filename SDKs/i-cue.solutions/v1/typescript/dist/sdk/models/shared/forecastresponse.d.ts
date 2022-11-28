import { SpeakeasyBase } from "../../../internal/utils";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesForecastResponse } from "./timeseriesforecastresponse";
export declare class ForecastResponse extends SpeakeasyBase {
    hyperparameters?: ForecastHyperparameterResponse;
    timeSeries?: TimeSeriesForecastResponse[];
}
