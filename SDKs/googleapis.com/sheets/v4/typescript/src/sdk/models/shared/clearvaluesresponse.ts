import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClearValuesResponse
/** 
 * The response when clearing a range of values in a spreadsheet.
**/
export class ClearValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clearedRange" })
  clearedRange?: string;

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
