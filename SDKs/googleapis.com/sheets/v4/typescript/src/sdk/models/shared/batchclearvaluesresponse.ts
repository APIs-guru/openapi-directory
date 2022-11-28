import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchClearValuesResponse
/** 
 * The response when clearing a range of values in a spreadsheet.
**/
export class BatchClearValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clearedRanges" })
  clearedRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
