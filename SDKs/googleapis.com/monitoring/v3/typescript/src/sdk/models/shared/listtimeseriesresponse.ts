import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";
import { TimeSeries } from "./timeseries";


// ListTimeSeriesResponse
/** 
 * The ListTimeSeries response.
**/
export class ListTimeSeriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionErrors", elemType: shared.Status })
  executionErrors?: Status[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=timeSeries", elemType: shared.TimeSeries })
  timeSeries?: TimeSeries[];

  @Metadata({ data: "json, name=unit" })
  unit?: string;
}
