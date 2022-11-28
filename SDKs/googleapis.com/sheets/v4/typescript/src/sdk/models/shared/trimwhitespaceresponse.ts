import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrimWhitespaceResponse
/** 
 * The result of trimming whitespace in cells.
**/
export class TrimWhitespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellsChangedCount" })
  cellsChangedCount?: number;
}
