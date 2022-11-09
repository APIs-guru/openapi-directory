import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GridRange } from "./gridrange";
import { RowData } from "./rowdata";
import { GridCoordinate } from "./gridcoordinate";


// UpdateCellsRequest
/** 
 * Updates all cells in a range with new data.
**/
export class UpdateCellsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=rows", elemType: shared.RowData })
  rows?: RowData[];

  @Metadata({ data: "json, name=start" })
  start?: GridCoordinate;
}
