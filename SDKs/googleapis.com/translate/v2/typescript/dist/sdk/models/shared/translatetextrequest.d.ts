import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The main translation request message for the Cloud Translation API.
**/
export declare class TranslateTextRequest extends SpeakeasyBase {
    format?: string;
    model?: string;
    q?: string[];
    source?: string;
    target?: string;
}
