import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableDisplayOptions } from "./tabledisplayoptions";
import { TimeSeriesQuery } from "./timeseriesquery";



// TableDataSet
/** 
 * Groups a time series query definition with table options.
**/
export class TableDataSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minAlignmentPeriod" })
  minAlignmentPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=tableDisplayOptions" })
  tableDisplayOptions?: TableDisplayOptions;

  @SpeakeasyMetadata({ data: "json, name=tableTemplate" })
  tableTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesQuery" })
  timeSeriesQuery?: TimeSeriesQuery;
}
