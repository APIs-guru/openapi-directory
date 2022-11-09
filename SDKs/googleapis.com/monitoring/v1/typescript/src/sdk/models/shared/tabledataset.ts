import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeSeriesQuery } from "./timeseriesquery";


// TableDataSet
/** 
 * Groups a time series query definition with table options.
**/
export class TableDataSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=minAlignmentPeriod" })
  minAlignmentPeriod?: string;

  @Metadata({ data: "json, name=tableDisplayOptions" })
  tableDisplayOptions?: Map<string, any>;

  @Metadata({ data: "json, name=tableTemplate" })
  tableTemplate?: string;

  @Metadata({ data: "json, name=timeSeriesQuery" })
  timeSeriesQuery?: TimeSeriesQuery;
}
