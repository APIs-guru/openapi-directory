import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { TimeSeries } from "./timeseries";
/**
 * The ListTimeSeries response.
**/
export declare class ListTimeSeriesResponse extends SpeakeasyBase {
    executionErrors?: Status[];
    nextPageToken?: string;
    timeSeries?: TimeSeries[];
    unit?: string;
}
