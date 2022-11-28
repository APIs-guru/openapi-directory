import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TranslateTextRequest
/** 
 * The main translation request message for the Cloud Translation API.
**/
export class TranslateTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=q" })
  q?: string[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;
}
