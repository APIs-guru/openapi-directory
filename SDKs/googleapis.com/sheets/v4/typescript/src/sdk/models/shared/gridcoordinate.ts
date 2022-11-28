import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GridCoordinate
/** 
 * A coordinate in a sheet. All indexes are zero-based.
**/
export class GridCoordinate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnIndex" })
  columnIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=rowIndex" })
  rowIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
