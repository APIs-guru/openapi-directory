import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentTranslation } from "./documenttranslation";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
/**
 * A translated document response message.
**/
export declare class TranslateDocumentResponse extends SpeakeasyBase {
    documentTranslation?: DocumentTranslation;
    glossaryConfig?: TranslateTextGlossaryConfig;
    glossaryDocumentTranslation?: DocumentTranslation;
    model?: string;
}
