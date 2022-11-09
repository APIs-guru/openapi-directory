import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrimWhitespaceResponse
/** 
 * The result of trimming whitespace in cells.
**/
export class TrimWhitespaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellsChangedCount" })
  cellsChangedCount?: number;
}
