import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect
/** 
 * Image Quality Defects
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
