import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentInputConfig } from "./documentinputconfig";
import { DocumentOutputConfig } from "./documentoutputconfig";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
/**
 * A document translation request.
**/
export declare class TranslateDocumentRequest extends SpeakeasyBase {
    customizedAttribution?: string;
    documentInputConfig?: DocumentInputConfig;
    documentOutputConfig?: DocumentOutputConfig;
    glossaryConfig?: TranslateTextGlossaryConfig;
    isTranslateNativePdfOnly?: boolean;
    labels?: Map<string, string>;
    model?: string;
    sourceLanguageCode?: string;
    targetLanguageCode?: string;
}
