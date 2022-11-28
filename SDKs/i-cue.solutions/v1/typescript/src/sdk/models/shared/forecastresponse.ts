import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesForecastResponse } from "./timeseriesforecastresponse";



export class ForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hyperparameters" })
  hyperparameters?: ForecastHyperparameterResponse;

  @SpeakeasyMetadata({ data: "json, name=timeSeries", elemType: TimeSeriesForecastResponse })
  timeSeries?: TimeSeriesForecastResponse[];
}
