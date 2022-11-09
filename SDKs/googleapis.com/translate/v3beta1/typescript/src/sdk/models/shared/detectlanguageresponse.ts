import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectedLanguage } from "./detectedlanguage";


// DetectLanguageResponse
/** 
 * The response message for language detection.
**/
export class DetectLanguageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=languages", elemType: shared.DetectedLanguage })
  languages?: DetectedLanguage[];
}
