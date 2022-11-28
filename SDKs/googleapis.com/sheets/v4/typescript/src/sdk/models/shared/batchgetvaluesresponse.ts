import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValueRange } from "./valuerange";



// BatchGetValuesResponse
/** 
 * The response when retrieving more than one range of values in a spreadsheet.
**/
export class BatchGetValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @SpeakeasyMetadata({ data: "json, name=valueRanges", elemType: ValueRange })
  valueRanges?: ValueRange[];
}
