import { SpeakeasyBase } from "../../../internal/utils";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
/**
 * A single translation response.
**/
export declare class Translation extends SpeakeasyBase {
    detectedLanguageCode?: string;
    glossaryConfig?: TranslateTextGlossaryConfig;
    model?: string;
    translatedText?: string;
}
