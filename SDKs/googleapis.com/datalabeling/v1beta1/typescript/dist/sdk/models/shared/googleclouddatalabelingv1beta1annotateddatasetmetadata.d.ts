import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1EventConfig } from "./googleclouddatalabelingv1beta1eventconfig";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionConfig } from "./googleclouddatalabelingv1beta1objectdetectionconfig";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingConfig } from "./googleclouddatalabelingv1beta1objecttrackingconfig";
import { GoogleCloudDatalabelingV1beta1PolylineConfig } from "./googleclouddatalabelingv1beta1polylineconfig";
import { GoogleCloudDatalabelingV1beta1SegmentationConfig } from "./googleclouddatalabelingv1beta1segmentationconfig";
import { GoogleCloudDatalabelingV1beta1TextClassificationConfig } from "./googleclouddatalabelingv1beta1textclassificationconfig";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig } from "./googleclouddatalabelingv1beta1textentityextractionconfig";
import { GoogleCloudDatalabelingV1beta1VideoClassificationConfig } from "./googleclouddatalabelingv1beta1videoclassificationconfig";
/**
 * Metadata on AnnotatedDataset.
**/
export declare class GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata extends SpeakeasyBase {
    boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
    eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;
    humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
    objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;
    objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;
    polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;
    segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;
    textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
    textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
    videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
}
