import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchClearValuesByDataFilterResponse
/** 
 * The response when clearing a range of values selected with DataFilters in a spreadsheet.
**/
export class BatchClearValuesByDataFilterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clearedRanges" })
  clearedRanges?: string[];

  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
