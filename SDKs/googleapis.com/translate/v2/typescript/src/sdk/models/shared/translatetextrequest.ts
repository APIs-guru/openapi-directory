import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TranslateTextRequest
/** 
 * The main translation request message for the Cloud Translation API.
**/
export class TranslateTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=q" })
  q?: string[];

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;
}
