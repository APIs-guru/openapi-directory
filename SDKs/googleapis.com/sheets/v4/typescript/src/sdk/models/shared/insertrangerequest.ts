import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";

export enum InsertRangeRequestShiftDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Rows = "ROWS"
,    Columns = "COLUMNS"
}


// InsertRangeRequest
/** 
 * Inserts cells into a range, shifting the existing cells over or down.
**/
export class InsertRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=shiftDimension" })
  shiftDimension?: InsertRangeRequestShiftDimensionEnum;
}
