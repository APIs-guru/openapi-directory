import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TextAtom } from "./textatom";


// TextStream
/** 
 * Encoding of a text stream. For example, closed captions or subtitles.
**/
export class TextStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=codec" })
  codec?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=mapping", elemType: shared.TextAtom })
  mapping?: TextAtom[];
}
