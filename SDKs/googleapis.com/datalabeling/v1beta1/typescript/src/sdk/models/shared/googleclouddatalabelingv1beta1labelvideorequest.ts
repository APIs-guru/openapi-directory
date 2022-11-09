import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1EventConfig } from "./googleclouddatalabelingv1beta1eventconfig";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionConfig } from "./googleclouddatalabelingv1beta1objectdetectionconfig";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingConfig } from "./googleclouddatalabelingv1beta1objecttrackingconfig";
import { GoogleCloudDatalabelingV1beta1VideoClassificationConfig } from "./googleclouddatalabelingv1beta1videoclassificationconfig";

export enum GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED"
,    Classification = "CLASSIFICATION"
,    ObjectDetection = "OBJECT_DETECTION"
,    ObjectTracking = "OBJECT_TRACKING"
,    Event = "EVENT"
}


// GoogleCloudDatalabelingV1beta1LabelVideoRequest
/** 
 * Request message for LabelVideo.
**/
export class GoogleCloudDatalabelingV1beta1LabelVideoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicConfig" })
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

  @Metadata({ data: "json, name=eventConfig" })
  eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;

  @Metadata({ data: "json, name=feature" })
  feature?: GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum;

  @Metadata({ data: "json, name=objectDetectionConfig" })
  objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;

  @Metadata({ data: "json, name=objectTrackingConfig" })
  objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;

  @Metadata({ data: "json, name=videoClassificationConfig" })
  videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
}
