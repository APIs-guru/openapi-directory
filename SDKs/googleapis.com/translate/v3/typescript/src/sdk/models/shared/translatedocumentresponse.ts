import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentTranslation } from "./documenttranslation";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
import { DocumentTranslation } from "./documenttranslation";


// TranslateDocumentResponse
/** 
 * A translated document response message.
**/
export class TranslateDocumentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentTranslation" })
  documentTranslation?: DocumentTranslation;

  @Metadata({ data: "json, name=glossaryConfig" })
  glossaryConfig?: TranslateTextGlossaryConfig;

  @Metadata({ data: "json, name=glossaryDocumentTranslation" })
  glossaryDocumentTranslation?: DocumentTranslation;

  @Metadata({ data: "json, name=model" })
  model?: string;
}
