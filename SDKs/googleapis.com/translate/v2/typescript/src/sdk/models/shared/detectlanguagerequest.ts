import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectLanguageRequest
/** 
 * The request message for language detection.
**/
export class DetectLanguageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=q" })
  q?: string[];
}
