import { SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";
/**
 * The batch translation request.
**/
export declare class BatchTranslateTextRequest extends SpeakeasyBase {
    glossaries?: Map<string, TranslateTextGlossaryConfig>;
    inputConfigs?: InputConfig[];
    labels?: Map<string, string>;
    models?: Map<string, string>;
    outputConfig?: OutputConfig;
    sourceLanguageCode?: string;
    targetLanguageCodes?: string[];
}
