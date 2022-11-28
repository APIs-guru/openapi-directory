import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchedValueRange } from "./matchedvaluerange";



// BatchGetValuesByDataFilterResponse
/** 
 * The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.
**/
export class BatchGetValuesByDataFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @SpeakeasyMetadata({ data: "json, name=valueRanges", elemType: MatchedValueRange })
  valueRanges?: MatchedValueRange[];
}
