import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateValuesResponse } from "./updatevaluesresponse";



// AppendValuesResponse
/** 
 * The response when updating a range of values in a spreadsheet.
**/
export class AppendValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableRange" })
  tableRange?: string;

  @SpeakeasyMetadata({ data: "json, name=updates" })
  updates?: UpdateValuesResponse;
}
