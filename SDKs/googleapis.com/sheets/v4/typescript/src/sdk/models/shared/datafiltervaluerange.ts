import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";


export enum DataFilterValueRangeMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}


// DataFilterValueRange
/** 
 * A range of values whose location is specified by a DataFilter.
**/
export class DataFilterValueRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFilter" })
  dataFilter?: DataFilter;

  @SpeakeasyMetadata({ data: "json, name=majorDimension" })
  majorDimension?: DataFilterValueRangeMajorDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: any[][];
}
