import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateValuesResponse } from "./updatevaluesresponse";


// AppendValuesResponse
/** 
 * The response when updating a range of values in a spreadsheet.
**/
export class AppendValuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @Metadata({ data: "json, name=tableRange" })
  tableRange?: string;

  @Metadata({ data: "json, name=updates" })
  updates?: UpdateValuesResponse;
}
