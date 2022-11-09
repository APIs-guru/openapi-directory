import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";


// TranslateTextRequest
/** 
 * The request message for synchronous translation.
**/
export class TranslateTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string[];

  @Metadata({ data: "json, name=glossaryConfig" })
  glossaryConfig?: TranslateTextGlossaryConfig;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @Metadata({ data: "json, name=targetLanguageCode" })
  targetLanguageCode?: string;
}
