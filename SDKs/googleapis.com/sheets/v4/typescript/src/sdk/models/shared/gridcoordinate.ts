import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GridCoordinate
/** 
 * A coordinate in a sheet. All indexes are zero-based.
**/
export class GridCoordinate extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnIndex" })
  columnIndex?: number;

  @Metadata({ data: "json, name=rowIndex" })
  rowIndex?: number;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
