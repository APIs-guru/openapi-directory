import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";



// BatchTranslateTextRequest
/** 
 * The batch translation request.
**/
export class BatchTranslateTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=glossaries", elemType: TranslateTextGlossaryConfig })
  glossaries?: Map<string, TranslateTextGlossaryConfig>;

  @SpeakeasyMetadata({ data: "json, name=inputConfigs", elemType: InputConfig })
  inputConfigs?: InputConfig[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=models" })
  models?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=sourceLanguageCode" })
  sourceLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLanguageCodes" })
  targetLanguageCodes?: string[];
}
