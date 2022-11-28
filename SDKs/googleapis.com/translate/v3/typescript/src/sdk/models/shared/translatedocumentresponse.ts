import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentTranslation } from "./documenttranslation";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";



// TranslateDocumentResponse
/** 
 * A translated document response message.
**/
export class TranslateDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentTranslation" })
  documentTranslation?: DocumentTranslation;

  @SpeakeasyMetadata({ data: "json, name=glossaryConfig" })
  glossaryConfig?: TranslateTextGlossaryConfig;

  @SpeakeasyMetadata({ data: "json, name=glossaryDocumentTranslation" })
  glossaryDocumentTranslation?: DocumentTranslation;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;
}
