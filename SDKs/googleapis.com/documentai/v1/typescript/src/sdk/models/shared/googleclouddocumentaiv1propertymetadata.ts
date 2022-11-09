import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1HumanReviewLabelingMetadata } from "./googleclouddocumentaiv1humanreviewlabelingmetadata";
import { GoogleCloudDocumentaiV1HumanReviewValidationMetadata } from "./googleclouddocumentaiv1humanreviewvalidationmetadata";


// GoogleCloudDocumentaiV1PropertyMetadata
/** 
 * Metadata about a property.
**/
export class GoogleCloudDocumentaiV1PropertyMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=humanReviewLabelingMetadata" })
  humanReviewLabelingMetadata?: GoogleCloudDocumentaiV1HumanReviewLabelingMetadata;

  @Metadata({ data: "json, name=humanReviewMetadata" })
  humanReviewMetadata?: GoogleCloudDocumentaiV1HumanReviewValidationMetadata;

  @Metadata({ data: "json, name=inactive" })
  inactive?: boolean;
}
