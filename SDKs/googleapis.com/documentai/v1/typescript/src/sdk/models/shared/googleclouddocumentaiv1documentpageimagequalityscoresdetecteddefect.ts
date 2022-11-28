import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect
/** 
 * Image Quality Defects
**/
export class GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
