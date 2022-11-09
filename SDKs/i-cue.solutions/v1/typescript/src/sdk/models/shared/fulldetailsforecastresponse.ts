import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesFullDetailsResponse } from "./timeseriesfulldetailsresponse";


export class FullDetailsForecastResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hyperparameters" })
  hyperparameters?: ForecastHyperparameterResponse;

  @Metadata({ data: "json, name=timeSeries", elemType: shared.TimeSeriesFullDetailsResponse })
  timeSeries?: TimeSeriesFullDetailsResponse[];
}
