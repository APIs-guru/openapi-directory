import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1ClassificationMetadata
/** 
 * Metadata for classification annotations.
**/
export class GoogleCloudDatalabelingV1beta1ClassificationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isMultiLabel" })
  isMultiLabel?: boolean;
}
