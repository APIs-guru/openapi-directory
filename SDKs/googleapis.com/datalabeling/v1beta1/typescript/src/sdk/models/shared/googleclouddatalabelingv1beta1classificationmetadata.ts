import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1ClassificationMetadata
/** 
 * Metadata for classification annotations.
**/
export class GoogleCloudDatalabelingV1beta1ClassificationMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=isMultiLabel" })
  isMultiLabel?: boolean;
}
