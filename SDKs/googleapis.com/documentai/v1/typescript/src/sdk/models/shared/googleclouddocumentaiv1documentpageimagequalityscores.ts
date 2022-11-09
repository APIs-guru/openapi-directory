import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect } from "./googleclouddocumentaiv1documentpageimagequalityscoresdetecteddefect";


// GoogleCloudDocumentaiV1DocumentPageImageQualityScores
/** 
 * Image Quality Scores for the page image
**/
export class GoogleCloudDocumentaiV1DocumentPageImageQualityScores extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedDefects", elemType: shared.GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect })
  detectedDefects?: GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect[];

  @Metadata({ data: "json, name=qualityScore" })
  qualityScore?: number;
}
