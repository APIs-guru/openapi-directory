import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect } from "./googleclouddocumentaiv1beta3documentpageimagequalityscoresdetecteddefect";


// GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores
/** 
 * Image Quality Scores for the page image
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedDefects", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect })
  detectedDefects?: GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect[];

  @Metadata({ data: "json, name=qualityScore" })
  qualityScore?: number;
}
