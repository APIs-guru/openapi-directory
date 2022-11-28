import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1EventConfig } from "./googleclouddatalabelingv1beta1eventconfig";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionConfig } from "./googleclouddatalabelingv1beta1objectdetectionconfig";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingConfig } from "./googleclouddatalabelingv1beta1objecttrackingconfig";
import { GoogleCloudDatalabelingV1beta1VideoClassificationConfig } from "./googleclouddatalabelingv1beta1videoclassificationconfig";


export enum GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    Classification = "CLASSIFICATION",
    ObjectDetection = "OBJECT_DETECTION",
    ObjectTracking = "OBJECT_TRACKING",
    Event = "EVENT"
}


// GoogleCloudDatalabelingV1beta1LabelVideoRequest
/** 
 * Request message for LabelVideo.
**/
export class GoogleCloudDatalabelingV1beta1LabelVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicConfig" })
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

  @SpeakeasyMetadata({ data: "json, name=eventConfig" })
  eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;

  @SpeakeasyMetadata({ data: "json, name=feature" })
  feature?: GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum;

  @SpeakeasyMetadata({ data: "json, name=objectDetectionConfig" })
  objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=objectTrackingConfig" })
  objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;

  @SpeakeasyMetadata({ data: "json, name=videoClassificationConfig" })
  videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
}
