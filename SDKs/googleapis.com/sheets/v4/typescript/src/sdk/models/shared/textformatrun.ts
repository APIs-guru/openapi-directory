import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextFormat } from "./textformat";



// TextFormatRun
/** 
 * A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.
**/
export class TextFormatRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: TextFormat;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;
}
