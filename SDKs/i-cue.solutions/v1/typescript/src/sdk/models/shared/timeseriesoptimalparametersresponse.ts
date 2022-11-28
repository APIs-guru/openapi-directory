import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForecastOptimalParametersResponse } from "./forecastoptimalparametersresponse";



export class TimeSeriesOptimalParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=optimalParameters" })
  optimalParameters?: ForecastOptimalParametersResponse;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
