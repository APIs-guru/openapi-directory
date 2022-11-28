import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextAtom } from "./textatom";



// TextStream
/** 
 * Encoding of a text stream. For example, closed captions or subtitles.
**/
export class TextStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=mapping", elemType: TextAtom })
  mapping?: TextAtom[];
}
