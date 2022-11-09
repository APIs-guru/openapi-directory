import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataFilter } from "./datafilter";

export enum DataFilterValueRangeMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Rows = "ROWS"
,    Columns = "COLUMNS"
}


// DataFilterValueRange
/** 
 * A range of values whose location is specified by a DataFilter.
**/
export class DataFilterValueRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFilter" })
  dataFilter?: DataFilter;

  @Metadata({ data: "json, name=majorDimension" })
  majorDimension?: DataFilterValueRangeMajorDimensionEnum;

  @Metadata({ data: "json, name=values" })
  values?: any[][];
}
