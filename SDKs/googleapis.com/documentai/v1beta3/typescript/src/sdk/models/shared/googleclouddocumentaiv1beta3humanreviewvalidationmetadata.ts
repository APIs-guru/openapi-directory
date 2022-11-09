import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3HumanReviewValidationMetadata
/** 
 * Metadata for Human Review config.
**/
export class GoogleCloudDocumentaiV1beta3HumanReviewValidationMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @Metadata({ data: "json, name=enableValidation" })
  enableValidation?: boolean;
}
