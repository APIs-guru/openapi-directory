import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchClearValuesByDataFilterResponse
/** 
 * The response when clearing a range of values selected with DataFilters in a spreadsheet.
**/
export class BatchClearValuesByDataFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clearedRanges" })
  clearedRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
