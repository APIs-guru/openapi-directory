import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
import { RowData } from "./rowdata";
import { GridCoordinate } from "./gridcoordinate";



// UpdateCellsRequest
/** 
 * Updates all cells in a range with new data.
**/
export class UpdateCellsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: RowData })
  rows?: RowData[];

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: GridCoordinate;
}
