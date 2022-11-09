import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeSeries } from "./timeseries";


// CreateTimeSeriesRequest
/** 
 * The CreateTimeSeries request.
**/
export class CreateTimeSeriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeSeries", elemType: shared.TimeSeries })
  timeSeries?: TimeSeries[];
}
