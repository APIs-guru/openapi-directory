import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchClearValuesResponse
/** 
 * The response when clearing a range of values in a spreadsheet.
**/
export class BatchClearValuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clearedRanges" })
  clearedRanges?: string[];

  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
