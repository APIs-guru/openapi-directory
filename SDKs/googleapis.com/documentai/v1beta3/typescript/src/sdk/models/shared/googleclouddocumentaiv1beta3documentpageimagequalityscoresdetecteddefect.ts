import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect
/** 
 * Image Quality Defects
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
