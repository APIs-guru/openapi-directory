import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1HumanReviewValidationMetadata
/** 
 * Metadata for Human Review config.
**/
export class GoogleCloudDocumentaiV1HumanReviewValidationMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @Metadata({ data: "json, name=enableValidation" })
  enableValidation?: boolean;
}
