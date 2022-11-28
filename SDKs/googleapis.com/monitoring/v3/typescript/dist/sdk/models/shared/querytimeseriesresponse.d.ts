import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { TimeSeriesData } from "./timeseriesdata";
import { TimeSeriesDescriptor } from "./timeseriesdescriptor";
/**
 * The QueryTimeSeries response.
**/
export declare class QueryTimeSeriesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    partialErrors?: Status[];
    timeSeriesData?: TimeSeriesData[];
    timeSeriesDescriptor?: TimeSeriesDescriptor;
}
