import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect } from "./googleclouddocumentaiv1beta2documentpageimagequalityscoresdetecteddefect";


// GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores
/** 
 * Image Quality Scores for the page image
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedDefects", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect })
  detectedDefects?: GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect[];

  @Metadata({ data: "json, name=qualityScore" })
  qualityScore?: number;
}
