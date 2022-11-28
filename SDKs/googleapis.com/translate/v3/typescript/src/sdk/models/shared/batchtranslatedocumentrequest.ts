import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
import { BatchDocumentInputConfig } from "./batchdocumentinputconfig";
import { BatchDocumentOutputConfig } from "./batchdocumentoutputconfig";



// BatchTranslateDocumentRequest
/** 
 * The BatchTranslateDocument request.
**/
export class BatchTranslateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formatConversions" })
  formatConversions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=glossaries", elemType: TranslateTextGlossaryConfig })
  glossaries?: Map<string, TranslateTextGlossaryConfig>;

  @SpeakeasyMetadata({ data: "json, name=inputConfigs", elemType: BatchDocumentInputConfig })
  inputConfigs?: BatchDocumentInputConfig[];

  @SpeakeasyMetadata({ data: "json, name=models" })
  models?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: BatchDocumentOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLanguageCodes" })
  targetLanguageCodes?: string[];
}
