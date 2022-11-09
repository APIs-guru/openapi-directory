import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GridRange
/** 
 * A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
**/
export class GridRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endColumnIndex" })
  endColumnIndex?: number;

  @Metadata({ data: "json, name=endRowIndex" })
  endRowIndex?: number;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;

  @Metadata({ data: "json, name=startColumnIndex" })
  startColumnIndex?: number;

  @Metadata({ data: "json, name=startRowIndex" })
  startRowIndex?: number;
}
