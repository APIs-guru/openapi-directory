import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";


export enum InsertRangeRequestShiftDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}


// InsertRangeRequest
/** 
 * Inserts cells into a range, shifting the existing cells over or down.
**/
export class InsertRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=shiftDimension" })
  shiftDimension?: InsertRangeRequestShiftDimensionEnum;
}
