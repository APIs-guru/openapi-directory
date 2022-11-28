import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSeries } from "./timeseries";



// CreateTimeSeriesRequest
/** 
 * The CreateTimeSeries request.
**/
export class CreateTimeSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeSeries", elemType: TimeSeries })
  timeSeries?: TimeSeries[];
}
