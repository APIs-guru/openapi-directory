import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";

export enum DeleteRangeRequestShiftDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Rows = "ROWS"
,    Columns = "COLUMNS"
}


// DeleteRangeRequest
/** 
 * Deletes a range of cells, shifting other cells into the deleted area.
**/
export class DeleteRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=shiftDimension" })
  shiftDimension?: DeleteRangeRequestShiftDimensionEnum;
}
