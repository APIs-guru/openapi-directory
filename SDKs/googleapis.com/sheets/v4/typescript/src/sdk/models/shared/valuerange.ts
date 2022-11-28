import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ValueRangeMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}


// ValueRange
/** 
 * Data within a range of the spreadsheet.
**/
export class ValueRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=majorDimension" })
  majorDimension?: ValueRangeMajorDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: any[][];
}
