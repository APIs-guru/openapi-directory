import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesOptimalParametersResponse } from "./timeseriesoptimalparametersresponse";


export class OptimalParameterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hyperparameters" })
  hyperparameters?: ForecastHyperparameterResponse;

  @Metadata({ data: "json, name=timeSeries", elemType: shared.TimeSeriesOptimalParametersResponse })
  timeSeries?: TimeSeriesOptimalParametersResponse[];
}
