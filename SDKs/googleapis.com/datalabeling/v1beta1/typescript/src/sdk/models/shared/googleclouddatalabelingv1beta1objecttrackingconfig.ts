import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1ObjectTrackingConfig
/** 
 * Config for video object tracking human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1ObjectTrackingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @SpeakeasyMetadata({ data: "json, name=clipLength" })
  clipLength?: number;

  @SpeakeasyMetadata({ data: "json, name=overlapLength" })
  overlapLength?: number;
}
