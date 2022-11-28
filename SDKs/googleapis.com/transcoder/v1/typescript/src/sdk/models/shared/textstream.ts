import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextMapping } from "./textmapping";



// TextStream
/** 
 * Encoding of a text stream. For example, closed captions or subtitles.
**/
export class TextStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=mapping", elemType: TextMapping })
  mapping?: TextMapping[];
}
