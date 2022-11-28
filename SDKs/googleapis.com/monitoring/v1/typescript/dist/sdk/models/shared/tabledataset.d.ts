import { SpeakeasyBase } from "../../../internal/utils";
import { TableDisplayOptions } from "./tabledisplayoptions";
import { TimeSeriesQuery } from "./timeseriesquery";
/**
 * Groups a time series query definition with table options.
**/
export declare class TableDataSet extends SpeakeasyBase {
    minAlignmentPeriod?: string;
    tableDisplayOptions?: TableDisplayOptions;
    tableTemplate?: string;
    timeSeriesQuery?: TimeSeriesQuery;
}
