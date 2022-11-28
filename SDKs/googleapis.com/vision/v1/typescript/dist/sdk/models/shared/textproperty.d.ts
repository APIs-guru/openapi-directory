import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedBreak } from "./detectedbreak";
import { DetectedLanguage } from "./detectedlanguage";
/**
 * Additional information detected on the structural component.
**/
export declare class TextProperty extends SpeakeasyBase {
    detectedBreak?: DetectedBreak;
    detectedLanguages?: DetectedLanguage[];
}
