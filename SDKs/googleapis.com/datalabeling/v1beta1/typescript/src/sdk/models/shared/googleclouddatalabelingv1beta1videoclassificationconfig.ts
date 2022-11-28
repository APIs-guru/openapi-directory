import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig } from "./googleclouddatalabelingv1beta1annotationspecsetconfig";



// GoogleCloudDatalabelingV1beta1VideoClassificationConfig
/** 
 * Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
**/
export class GoogleCloudDatalabelingV1beta1VideoClassificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecSetConfigs", elemType: GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig })
  annotationSpecSetConfigs?: GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig[];

  @SpeakeasyMetadata({ data: "json, name=applyShotDetection" })
  applyShotDetection?: boolean;
}
