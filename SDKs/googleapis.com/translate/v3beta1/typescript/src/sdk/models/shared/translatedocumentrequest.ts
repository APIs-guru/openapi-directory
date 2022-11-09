import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentInputConfig } from "./documentinputconfig";
import { DocumentOutputConfig } from "./documentoutputconfig";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";


// TranslateDocumentRequest
/** 
 * A document translation request.
**/
export class TranslateDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customizedAttribution" })
  customizedAttribution?: string;

  @Metadata({ data: "json, name=documentInputConfig" })
  documentInputConfig?: DocumentInputConfig;

  @Metadata({ data: "json, name=documentOutputConfig" })
  documentOutputConfig?: DocumentOutputConfig;

  @Metadata({ data: "json, name=glossaryConfig" })
  glossaryConfig?: TranslateTextGlossaryConfig;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @Metadata({ data: "json, name=targetLanguageCode" })
  targetLanguageCode?: string;
}
