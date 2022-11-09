import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";


export class TimeSeriesHistoryAndForecastResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: number;

  @Metadata({ data: "json, name=forecastData", elemType: shared.PlanningLevelForecastResultData })
  forecastData?: PlanningLevelForecastResultData[];

  @Metadata({ data: "json, name=historyData", elemType: shared.PlanningLevelForecastResultData })
  historyData?: PlanningLevelForecastResultData[];

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
