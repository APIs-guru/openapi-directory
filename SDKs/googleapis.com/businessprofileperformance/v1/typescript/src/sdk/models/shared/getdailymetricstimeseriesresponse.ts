import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeSeries } from "./timeseries";


// GetDailyMetricsTimeSeriesResponse
/** 
 * Represents the response for GetDailyMetricsTimeSeries.
**/
export class GetDailyMetricsTimeSeriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeSeries" })
  timeSeries?: TimeSeries;
}
