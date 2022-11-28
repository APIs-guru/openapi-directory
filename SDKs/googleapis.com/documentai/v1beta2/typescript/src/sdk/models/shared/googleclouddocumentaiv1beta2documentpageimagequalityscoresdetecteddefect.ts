import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect
/** 
 * Image Quality Defects
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
