import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVideointelligenceV1beta2TextDetectionConfig
/** 
 * Config for TEXT_DETECTION.
**/
export class GoogleCloudVideointelligenceV1beta2TextDetectionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageHints" })
  languageHints?: string[];

  @Metadata({ data: "json, name=model" })
  model?: string;
}
