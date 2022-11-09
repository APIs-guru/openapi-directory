import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ForecastOptimalParametersResponse } from "./forecastoptimalparametersresponse";


export class TimeSeriesOptimalParametersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=optimalParameters" })
  optimalParameters?: ForecastOptimalParametersResponse;

  @Metadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
