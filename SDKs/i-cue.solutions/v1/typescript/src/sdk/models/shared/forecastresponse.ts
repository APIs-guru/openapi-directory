import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesForecastResponse } from "./timeseriesforecastresponse";


export class ForecastResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hyperparameters" })
  hyperparameters?: ForecastHyperparameterResponse;

  @Metadata({ data: "json, name=timeSeries", elemType: shared.TimeSeriesForecastResponse })
  timeSeries?: TimeSeriesForecastResponse[];
}
