import { SpeakeasyBase } from "../../../internal/utils";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
import { TimeSeriesOptimalParametersResponse } from "./timeseriesoptimalparametersresponse";
export declare class OptimalParameterResponse extends SpeakeasyBase {
    hyperparameters?: ForecastHyperparameterResponse;
    timeSeries?: TimeSeriesOptimalParametersResponse[];
}
