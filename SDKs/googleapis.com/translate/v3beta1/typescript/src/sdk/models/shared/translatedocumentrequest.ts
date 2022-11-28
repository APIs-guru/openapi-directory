import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentInputConfig } from "./documentinputconfig";
import { DocumentOutputConfig } from "./documentoutputconfig";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";



// TranslateDocumentRequest
/** 
 * A document translation request.
**/
export class TranslateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customizedAttribution" })
  customizedAttribution?: string;

  @SpeakeasyMetadata({ data: "json, name=documentInputConfig" })
  documentInputConfig?: DocumentInputConfig;

  @SpeakeasyMetadata({ data: "json, name=documentOutputConfig" })
  documentOutputConfig?: DocumentOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=glossaryConfig" })
  glossaryConfig?: TranslateTextGlossaryConfig;

  @SpeakeasyMetadata({ data: "json, name=isTranslateNativePdfOnly" })
  isTranslateNativePdfOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLanguageCode" })
  targetLanguageCode?: string;
}
