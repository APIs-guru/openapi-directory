import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1ObjectTrackingConfig
/** 
 * Config for video object tracking human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1ObjectTrackingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @Metadata({ data: "json, name=clipLength" })
  clipLength?: number;

  @Metadata({ data: "json, name=overlapLength" })
  overlapLength?: number;
}
