import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect } from "./googleclouddocumentaiv1documentpageimagequalityscoresdetecteddefect";



// GoogleCloudDocumentaiV1DocumentPageImageQualityScores
/** 
 * Image Quality Scores for the page image
**/
export class GoogleCloudDocumentaiV1DocumentPageImageQualityScores extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedDefects", elemType: GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect })
  detectedDefects?: GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect[];

  @SpeakeasyMetadata({ data: "json, name=qualityScore" })
  qualityScore?: number;
}
