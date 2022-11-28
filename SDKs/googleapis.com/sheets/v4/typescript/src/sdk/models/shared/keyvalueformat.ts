import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextPosition } from "./textposition";
import { TextFormat } from "./textformat";



// KeyValueFormat
/** 
 * Formatting options for key value.
**/
export class KeyValueFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: TextPosition;

  @SpeakeasyMetadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;
}
