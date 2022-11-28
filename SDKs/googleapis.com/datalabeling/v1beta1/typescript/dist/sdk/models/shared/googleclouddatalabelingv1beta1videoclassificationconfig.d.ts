import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig } from "./googleclouddatalabelingv1beta1annotationspecsetconfig";
/**
 * Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
**/
export declare class GoogleCloudDatalabelingV1beta1VideoClassificationConfig extends SpeakeasyBase {
    annotationSpecSetConfigs?: GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig[];
    applyShotDetection?: boolean;
}
