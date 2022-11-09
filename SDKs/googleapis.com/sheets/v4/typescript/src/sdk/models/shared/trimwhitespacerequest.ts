import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";


// TrimWhitespaceRequest
/** 
 * Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula.
**/
export class TrimWhitespaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: GridRange;
}
