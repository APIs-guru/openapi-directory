import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";
import { TimeSeriesData } from "./timeseriesdata";
import { TimeSeriesDescriptor } from "./timeseriesdescriptor";


// QueryTimeSeriesResponse
/** 
 * The QueryTimeSeries response.
**/
export class QueryTimeSeriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=partialErrors", elemType: shared.Status })
  partialErrors?: Status[];

  @Metadata({ data: "json, name=timeSeriesData", elemType: shared.TimeSeriesData })
  timeSeriesData?: TimeSeriesData[];

  @Metadata({ data: "json, name=timeSeriesDescriptor" })
  timeSeriesDescriptor?: TimeSeriesDescriptor;
}
