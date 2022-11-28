import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectLanguageRequest
/** 
 * The request message for language detection.
**/
export class DetectLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;
}
