import { SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
import { BatchDocumentInputConfig } from "./batchdocumentinputconfig";
import { BatchDocumentOutputConfig } from "./batchdocumentoutputconfig";
/**
 * The BatchTranslateDocument request.
**/
export declare class BatchTranslateDocumentRequest extends SpeakeasyBase {
    formatConversions?: Map<string, string>;
    glossaries?: Map<string, TranslateTextGlossaryConfig>;
    inputConfigs?: BatchDocumentInputConfig[];
    models?: Map<string, string>;
    outputConfig?: BatchDocumentOutputConfig;
    sourceLanguageCode?: string;
    targetLanguageCodes?: string[];
}
