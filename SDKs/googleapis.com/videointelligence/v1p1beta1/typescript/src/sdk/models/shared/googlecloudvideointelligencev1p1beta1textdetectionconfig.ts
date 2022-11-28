import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig
/** 
 * Config for TEXT_DETECTION.
**/
export class GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageHints" })
  languageHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;
}
