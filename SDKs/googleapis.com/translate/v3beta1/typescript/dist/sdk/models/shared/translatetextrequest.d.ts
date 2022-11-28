import { SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
/**
 * The request message for synchronous translation.
**/
export declare class TranslateTextRequest extends SpeakeasyBase {
    contents?: string[];
    glossaryConfig?: TranslateTextGlossaryConfig;
    labels?: Map<string, string>;
    mimeType?: string;
    model?: string;
    sourceLanguageCode?: string;
    targetLanguageCode?: string;
}
