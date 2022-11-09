import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";


// BatchTranslateTextRequest
/** 
 * The batch translation request.
**/
export class BatchTranslateTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=glossaries", elemType: shared.TranslateTextGlossaryConfig })
  glossaries?: Map<string, TranslateTextGlossaryConfig>;

  @Metadata({ data: "json, name=inputConfigs", elemType: shared.InputConfig })
  inputConfigs?: InputConfig[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=models" })
  models?: Map<string, string>;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;

  @Metadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @Metadata({ data: "json, name=targetLanguageCodes" })
  targetLanguageCodes?: string[];
}
