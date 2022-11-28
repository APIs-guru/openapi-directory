import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect } from "./googleclouddocumentaiv1beta3documentpageimagequalityscoresdetecteddefect";



// GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores
/** 
 * Image Quality Scores for the page image
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedDefects", elemType: GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect })
  detectedDefects?: GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect[];

  @SpeakeasyMetadata({ data: "json, name=qualityScore" })
  qualityScore?: number;
}
