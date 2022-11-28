import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for language detection.
**/
export declare class DetectLanguageRequest extends SpeakeasyBase {
    content?: string;
    labels?: Map<string, string>;
    mimeType?: string;
    model?: string;
}
