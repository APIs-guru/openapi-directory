import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1EvaluationConfig } from "./googleclouddatalabelingv1beta1evaluationconfig";
import { GoogleCloudDatalabelingV1beta1EvaluationMetrics } from "./googleclouddatalabelingv1beta1evaluationmetrics";
export declare enum GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum {
    AnnotationTypeUnspecified = "ANNOTATION_TYPE_UNSPECIFIED",
    ImageClassificationAnnotation = "IMAGE_CLASSIFICATION_ANNOTATION",
    ImageBoundingBoxAnnotation = "IMAGE_BOUNDING_BOX_ANNOTATION",
    ImageOrientedBoundingBoxAnnotation = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION",
    ImageBoundingPolyAnnotation = "IMAGE_BOUNDING_POLY_ANNOTATION",
    ImagePolylineAnnotation = "IMAGE_POLYLINE_ANNOTATION",
    ImageSegmentationAnnotation = "IMAGE_SEGMENTATION_ANNOTATION",
    VideoShotsClassificationAnnotation = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION",
    VideoObjectTrackingAnnotation = "VIDEO_OBJECT_TRACKING_ANNOTATION",
    VideoObjectDetectionAnnotation = "VIDEO_OBJECT_DETECTION_ANNOTATION",
    VideoEventAnnotation = "VIDEO_EVENT_ANNOTATION",
    TextClassificationAnnotation = "TEXT_CLASSIFICATION_ANNOTATION",
    TextEntityExtractionAnnotation = "TEXT_ENTITY_EXTRACTION_ANNOTATION",
    GeneralClassificationAnnotation = "GENERAL_CLASSIFICATION_ANNOTATION"
}
/**
 * Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.
**/
export declare class GoogleCloudDatalabelingV1beta1Evaluation extends SpeakeasyBase {
    annotationType?: GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum;
    config?: GoogleCloudDatalabelingV1beta1EvaluationConfig;
    createTime?: string;
    evaluatedItemCount?: string;
    evaluationJobRunTime?: string;
    evaluationMetrics?: GoogleCloudDatalabelingV1beta1EvaluationMetrics;
    name?: string;
}
