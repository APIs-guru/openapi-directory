import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { TimeSeries } from "./timeseries";



// ListTimeSeriesResponse
/** 
 * The ListTimeSeries response.
**/
export class ListTimeSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionErrors", elemType: Status })
  executionErrors?: Status[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSeries", elemType: TimeSeries })
  timeSeries?: TimeSeries[];

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
