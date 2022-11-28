import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";



export class TimeSeriesForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: number;

  @SpeakeasyMetadata({ data: "json, name=forecastData", elemType: PlanningLevelForecastResultData })
  forecastData?: PlanningLevelForecastResultData[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
