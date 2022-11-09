import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClearValuesResponse
/** 
 * The response when clearing a range of values in a spreadsheet.
**/
export class ClearValuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clearedRange" })
  clearedRange?: string;

  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
