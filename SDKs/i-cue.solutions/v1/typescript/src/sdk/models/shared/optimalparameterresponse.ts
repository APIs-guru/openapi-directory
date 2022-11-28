import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesOptimalParametersResponse } from "./timeseriesoptimalparametersresponse";



export class OptimalParameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hyperparameters" })
  hyperparameters?: ForecastHyperparameterResponse;

  @SpeakeasyMetadata({ data: "json, name=timeSeries", elemType: TimeSeriesOptimalParametersResponse })
  timeSeries?: TimeSeriesOptimalParametersResponse[];
}
