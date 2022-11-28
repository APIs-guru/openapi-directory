import { SpeakeasyBase } from "../../../internal/utils";
import { ForecastOptimalParametersResponse } from "./forecastoptimalparametersresponse";
export declare class TimeSeriesOptimalParametersResponse extends SpeakeasyBase {
    method?: string;
    optimalParameters?: ForecastOptimalParametersResponse;
    timeSeriesId?: string;
}
