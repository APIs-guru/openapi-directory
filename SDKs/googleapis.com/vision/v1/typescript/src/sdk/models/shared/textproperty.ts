import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectedBreak } from "./detectedbreak";
import { DetectedLanguage } from "./detectedlanguage";


// TextProperty
/** 
 * Additional information detected on the structural component.
**/
export class TextProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedBreak" })
  detectedBreak?: DetectedBreak;

  @Metadata({ data: "json, name=detectedLanguages", elemType: shared.DetectedLanguage })
  detectedLanguages?: DetectedLanguage[];
}
