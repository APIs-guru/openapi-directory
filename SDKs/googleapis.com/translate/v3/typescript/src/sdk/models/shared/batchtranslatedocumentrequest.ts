import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
import { BatchDocumentInputConfig } from "./batchdocumentinputconfig";
import { BatchDocumentOutputConfig } from "./batchdocumentoutputconfig";


// BatchTranslateDocumentRequest
/** 
 * The BatchTranslateDocument request.
**/
export class BatchTranslateDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=formatConversions" })
  formatConversions?: Map<string, string>;

  @Metadata({ data: "json, name=glossaries", elemType: shared.TranslateTextGlossaryConfig })
  glossaries?: Map<string, TranslateTextGlossaryConfig>;

  @Metadata({ data: "json, name=inputConfigs", elemType: shared.BatchDocumentInputConfig })
  inputConfigs?: BatchDocumentInputConfig[];

  @Metadata({ data: "json, name=models" })
  models?: Map<string, string>;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: BatchDocumentOutputConfig;

  @Metadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @Metadata({ data: "json, name=targetLanguageCodes" })
  targetLanguageCodes?: string[];
}
