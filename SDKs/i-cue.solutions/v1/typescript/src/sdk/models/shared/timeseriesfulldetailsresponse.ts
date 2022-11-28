import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";
import { ForecastOptimalParametersResponse } from "./forecastoptimalparametersresponse";
import { OutlierResponse } from "./outlierresponse";



export class TimeSeriesFullDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: number;

  @SpeakeasyMetadata({ data: "json, name=forecastData", elemType: PlanningLevelForecastResultData })
  forecastData?: PlanningLevelForecastResultData[];

  @SpeakeasyMetadata({ data: "json, name=historyData", elemType: PlanningLevelForecastResultData })
  historyData?: PlanningLevelForecastResultData[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=optimalParameters" })
  optimalParameters?: ForecastOptimalParametersResponse;

  @SpeakeasyMetadata({ data: "json, name=outliers", elemType: OutlierResponse })
  outliers?: OutlierResponse[];

  @SpeakeasyMetadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
