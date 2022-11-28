import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";



// TranslateTextRequest
/** 
 * The request message for synchronous translation.
**/
export class TranslateTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string[];

  @SpeakeasyMetadata({ data: "json, name=glossaryConfig" })
  glossaryConfig?: TranslateTextGlossaryConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLanguageCode" })
  targetLanguageCode?: string;
}
