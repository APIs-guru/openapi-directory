import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";
import { ForecastOptimalParametersResponse } from "./forecastoptimalparametersresponse";
import { OutlierResponse } from "./outlierresponse";


export class TimeSeriesFullDetailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: number;

  @Metadata({ data: "json, name=forecastData", elemType: shared.PlanningLevelForecastResultData })
  forecastData?: PlanningLevelForecastResultData[];

  @Metadata({ data: "json, name=historyData", elemType: shared.PlanningLevelForecastResultData })
  historyData?: PlanningLevelForecastResultData[];

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=optimalParameters" })
  optimalParameters?: ForecastOptimalParametersResponse;

  @Metadata({ data: "json, name=outliers", elemType: shared.OutlierResponse })
  outliers?: OutlierResponse[];

  @Metadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
