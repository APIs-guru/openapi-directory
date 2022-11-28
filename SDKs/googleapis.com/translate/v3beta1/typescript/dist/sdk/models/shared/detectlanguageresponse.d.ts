import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedLanguage } from "./detectedlanguage";
/**
 * The response message for language detection.
**/
export declare class DetectLanguageResponse extends SpeakeasyBase {
    languages?: DetectedLanguage[];
}
