import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect
/** 
 * Image Quality Defects
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
