import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { TimeSeriesData } from "./timeseriesdata";
import { TimeSeriesDescriptor } from "./timeseriesdescriptor";



// QueryTimeSeriesResponse
/** 
 * The QueryTimeSeries response.
**/
export class QueryTimeSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=partialErrors", elemType: Status })
  partialErrors?: Status[];

  @SpeakeasyMetadata({ data: "json, name=timeSeriesData", elemType: TimeSeriesData })
  timeSeriesData?: TimeSeriesData[];

  @SpeakeasyMetadata({ data: "json, name=timeSeriesDescriptor" })
  timeSeriesDescriptor?: TimeSeriesDescriptor;
}
