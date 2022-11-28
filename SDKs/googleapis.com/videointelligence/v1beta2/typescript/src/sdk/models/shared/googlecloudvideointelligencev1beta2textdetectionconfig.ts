import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVideointelligenceV1beta2TextDetectionConfig
/** 
 * Config for TEXT_DETECTION.
**/
export class GoogleCloudVideointelligenceV1beta2TextDetectionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageHints" })
  languageHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;
}
