import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesHistoryAndForecastResponse } from "./timeserieshistoryandforecastresponse";



export class HistoryAndForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hyperparameters" })
  hyperparameters?: ForecastHyperparameterResponse;

  @SpeakeasyMetadata({ data: "json, name=timeSeries", elemType: TimeSeriesHistoryAndForecastResponse })
  timeSeries?: TimeSeriesHistoryAndForecastResponse[];
}
