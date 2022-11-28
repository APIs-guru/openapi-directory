import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesFullDetailsResponse } from "./timeseriesfulldetailsresponse";



export class FullDetailsForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hyperparameters" })
  hyperparameters?: ForecastHyperparameterResponse;

  @SpeakeasyMetadata({ data: "json, name=timeSeries", elemType: TimeSeriesFullDetailsResponse })
  timeSeries?: TimeSeriesFullDetailsResponse[];
}
