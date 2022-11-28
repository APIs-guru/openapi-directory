import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectedLanguage } from "./detectedlanguage";



// DetectLanguageResponse
/** 
 * The response message for language detection.
**/
export class DetectLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languages", elemType: DetectedLanguage })
  languages?: DetectedLanguage[];
}
