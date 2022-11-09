import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextPosition } from "./textposition";
import { TextFormat } from "./textformat";


// KeyValueFormat
/** 
 * Formatting options for key value.
**/
export class KeyValueFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=position" })
  position?: TextPosition;

  @Metadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;
}
