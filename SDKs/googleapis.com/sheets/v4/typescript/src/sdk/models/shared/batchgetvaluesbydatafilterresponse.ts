import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchedValueRange } from "./matchedvaluerange";


// BatchGetValuesByDataFilterResponse
/** 
 * The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.
**/
export class BatchGetValuesByDataFilterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;

  @Metadata({ data: "json, name=valueRanges", elemType: shared.MatchedValueRange })
  valueRanges?: MatchedValueRange[];
}
