import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectLanguageRequest
/** 
 * The request message for language detection.
**/
export class DetectLanguageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;
}
