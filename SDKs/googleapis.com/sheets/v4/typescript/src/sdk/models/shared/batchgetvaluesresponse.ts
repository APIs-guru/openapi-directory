import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValueRange } from "./valuerange";


// BatchGetValuesResponse
/** 
 * The response when retrieving more than one range of values in a spreadsheet.
**/
export class BatchGetValuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @Metadata({ data: "json, name=valueRanges", elemType: shared.ValueRange })
  valueRanges?: ValueRange[];
}
