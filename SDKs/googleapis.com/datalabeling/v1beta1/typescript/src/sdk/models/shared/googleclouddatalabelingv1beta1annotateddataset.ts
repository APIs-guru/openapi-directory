import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1LabelStats } from "./googleclouddatalabelingv1beta1labelstats";
import { GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata } from "./googleclouddatalabelingv1beta1annotateddatasetmetadata";

export enum GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum {
    AnnotationSourceUnspecified = "ANNOTATION_SOURCE_UNSPECIFIED"
,    Operator = "OPERATOR"
}

export enum GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum {
    AnnotationTypeUnspecified = "ANNOTATION_TYPE_UNSPECIFIED"
,    ImageClassificationAnnotation = "IMAGE_CLASSIFICATION_ANNOTATION"
,    ImageBoundingBoxAnnotation = "IMAGE_BOUNDING_BOX_ANNOTATION"
,    ImageOrientedBoundingBoxAnnotation = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
,    ImageBoundingPolyAnnotation = "IMAGE_BOUNDING_POLY_ANNOTATION"
,    ImagePolylineAnnotation = "IMAGE_POLYLINE_ANNOTATION"
,    ImageSegmentationAnnotation = "IMAGE_SEGMENTATION_ANNOTATION"
,    VideoShotsClassificationAnnotation = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
,    VideoObjectTrackingAnnotation = "VIDEO_OBJECT_TRACKING_ANNOTATION"
,    VideoObjectDetectionAnnotation = "VIDEO_OBJECT_DETECTION_ANNOTATION"
,    VideoEventAnnotation = "VIDEO_EVENT_ANNOTATION"
,    TextClassificationAnnotation = "TEXT_CLASSIFICATION_ANNOTATION"
,    TextEntityExtractionAnnotation = "TEXT_ENTITY_EXTRACTION_ANNOTATION"
,    GeneralClassificationAnnotation = "GENERAL_CLASSIFICATION_ANNOTATION"
}


// GoogleCloudDatalabelingV1beta1AnnotatedDataset
/** 
 * AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for.
**/
export class GoogleCloudDatalabelingV1beta1AnnotatedDataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSource" })
  annotationSource?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum;

  @Metadata({ data: "json, name=annotationType" })
  annotationType?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum;

  @Metadata({ data: "json, name=blockingResources" })
  blockingResources?: string[];

  @Metadata({ data: "json, name=completedExampleCount" })
  completedExampleCount?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=exampleCount" })
  exampleCount?: string;

  @Metadata({ data: "json, name=labelStats" })
  labelStats?: GoogleCloudDatalabelingV1beta1LabelStats;

  @Metadata({ data: "json, name=metadata" })
  metadata?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
