import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesHistoryAndForecastResponse } from "./timeserieshistoryandforecastresponse";


export class HistoryAndForecastResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hyperparameters" })
  hyperparameters?: ForecastHyperparameterResponse;

  @Metadata({ data: "json, name=timeSeries", elemType: shared.TimeSeriesHistoryAndForecastResponse })
  timeSeries?: TimeSeriesHistoryAndForecastResponse[];
}
