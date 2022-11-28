import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1EventConfig } from "./googleclouddatalabelingv1beta1eventconfig";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionConfig } from "./googleclouddatalabelingv1beta1objectdetectionconfig";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingConfig } from "./googleclouddatalabelingv1beta1objecttrackingconfig";
import { GoogleCloudDatalabelingV1beta1VideoClassificationConfig } from "./googleclouddatalabelingv1beta1videoclassificationconfig";
export declare enum GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    Classification = "CLASSIFICATION",
    ObjectDetection = "OBJECT_DETECTION",
    ObjectTracking = "OBJECT_TRACKING",
    Event = "EVENT"
}
/**
 * Request message for LabelVideo.
**/
export declare class GoogleCloudDatalabelingV1beta1LabelVideoRequest extends SpeakeasyBase {
    basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;
    feature?: GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum;
    objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;
    objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;
    videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
}
