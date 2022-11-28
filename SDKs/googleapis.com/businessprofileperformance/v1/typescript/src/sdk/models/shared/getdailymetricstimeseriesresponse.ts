import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSeries } from "./timeseries";



// GetDailyMetricsTimeSeriesResponse
/** 
 * Represents the response for GetDailyMetricsTimeSeries.
**/
export class GetDailyMetricsTimeSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeSeries" })
  timeSeries?: TimeSeries;
}
