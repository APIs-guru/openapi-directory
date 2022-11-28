import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect } from "./googleclouddocumentaiv1beta2documentpageimagequalityscoresdetecteddefect";



// GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores
/** 
 * Image Quality Scores for the page image
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedDefects", elemType: GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect })
  detectedDefects?: GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect[];

  @SpeakeasyMetadata({ data: "json, name=qualityScore" })
  qualityScore?: number;
}
