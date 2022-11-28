import { SpeakeasyBase } from "../../../internal/utils";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesFullDetailsResponse } from "./timeseriesfulldetailsresponse";
export declare class FullDetailsForecastResponse extends SpeakeasyBase {
    hyperparameters?: ForecastHyperparameterResponse;
    timeSeries?: TimeSeriesFullDetailsResponse[];
}
