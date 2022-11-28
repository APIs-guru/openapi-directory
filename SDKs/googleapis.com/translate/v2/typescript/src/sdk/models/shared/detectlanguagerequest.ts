import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectLanguageRequest
/** 
 * The request message for language detection.
**/
export class DetectLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=q" })
  q?: string[];
}
