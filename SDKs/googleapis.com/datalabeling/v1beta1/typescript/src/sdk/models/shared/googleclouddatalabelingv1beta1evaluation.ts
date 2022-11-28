import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1EvaluationConfig } from "./googleclouddatalabelingv1beta1evaluationconfig";
import { GoogleCloudDatalabelingV1beta1EvaluationMetrics } from "./googleclouddatalabelingv1beta1evaluationmetrics";


export enum GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum {
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


// GoogleCloudDatalabelingV1beta1Evaluation
/** 
 * Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.
**/
export class GoogleCloudDatalabelingV1beta1Evaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationType" })
  annotationType?: GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudDatalabelingV1beta1EvaluationConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluatedItemCount" })
  evaluatedItemCount?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationJobRunTime" })
  evaluationJobRunTime?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationMetrics" })
  evaluationMetrics?: GoogleCloudDatalabelingV1beta1EvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
