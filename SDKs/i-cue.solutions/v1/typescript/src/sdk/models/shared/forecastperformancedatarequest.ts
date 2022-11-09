import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForecastPerformanceDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=forecastValues" })
  forecastValues?: number[];

  @Metadata({ data: "json, name=historyValues" })
  historyValues?: number[];

  @Metadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
