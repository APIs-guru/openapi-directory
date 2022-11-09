import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ValueRangeMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Rows = "ROWS"
,    Columns = "COLUMNS"
}


// ValueRange
/** 
 * Data within a range of the spreadsheet.
**/
export class ValueRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=majorDimension" })
  majorDimension?: ValueRangeMajorDimensionEnum;

  @Metadata({ data: "json, name=range" })
  range?: string;

  @Metadata({ data: "json, name=values" })
  values?: any[][];
}
