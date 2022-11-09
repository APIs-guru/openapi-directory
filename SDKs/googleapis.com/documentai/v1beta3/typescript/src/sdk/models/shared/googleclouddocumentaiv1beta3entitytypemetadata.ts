import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta3HumanReviewLabelingMetadata } from "./googleclouddocumentaiv1beta3humanreviewlabelingmetadata";
import { GoogleCloudDocumentaiV1beta3HumanReviewValidationMetadata } from "./googleclouddocumentaiv1beta3humanreviewvalidationmetadata";


// GoogleCloudDocumentaiV1beta3EntityTypeMetadata
/** 
 * Metadata about an entity type.
**/
export class GoogleCloudDocumentaiV1beta3EntityTypeMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=humanReviewLabelingMetadata" })
  humanReviewLabelingMetadata?: GoogleCloudDocumentaiV1beta3HumanReviewLabelingMetadata;

  @Metadata({ data: "json, name=humanReviewMetadata" })
  humanReviewMetadata?: GoogleCloudDocumentaiV1beta3HumanReviewValidationMetadata;

  @Metadata({ data: "json, name=inactive" })
  inactive?: boolean;
}
