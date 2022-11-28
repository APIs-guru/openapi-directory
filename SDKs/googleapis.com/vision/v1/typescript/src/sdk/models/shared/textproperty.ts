import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectedBreak } from "./detectedbreak";
import { DetectedLanguage } from "./detectedlanguage";



// TextProperty
/** 
 * Additional information detected on the structural component.
**/
export class TextProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedBreak" })
  detectedBreak?: DetectedBreak;

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: DetectedLanguage })
  detectedLanguages?: DetectedLanguage[];
}
