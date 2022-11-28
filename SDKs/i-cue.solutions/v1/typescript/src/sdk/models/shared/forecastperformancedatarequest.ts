import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForecastPerformanceDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forecastValues" })
  forecastValues?: number[];

  @SpeakeasyMetadata({ data: "json, name=historyValues" })
  historyValues?: number[];

  @SpeakeasyMetadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
