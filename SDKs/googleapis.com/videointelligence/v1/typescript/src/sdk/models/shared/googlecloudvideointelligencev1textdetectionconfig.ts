import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVideointelligenceV1TextDetectionConfig
/** 
 * Config for TEXT_DETECTION.
**/
export class GoogleCloudVideointelligenceV1TextDetectionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageHints" })
  languageHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;
}
