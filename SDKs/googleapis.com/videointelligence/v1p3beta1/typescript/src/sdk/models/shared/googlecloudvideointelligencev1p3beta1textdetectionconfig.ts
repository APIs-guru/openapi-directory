import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig
/** 
 * Config for TEXT_DETECTION.
**/
export class GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageHints" })
  languageHints?: string[];

  @Metadata({ data: "json, name=model" })
  model?: string;
}
