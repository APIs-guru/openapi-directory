import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1HumanReviewLabelingMetadata
/** 
 * Metadata for human review labeling config.
**/
export class GoogleCloudDocumentaiV1HumanReviewLabelingMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableNormalizationEditing" })
  enableNormalizationEditing?: boolean;
}
