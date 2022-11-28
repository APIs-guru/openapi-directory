import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BigQuerySource } from "./googleclouddatalabelingv1beta1bigquerysource";
import { GoogleCloudDatalabelingV1beta1ClassificationMetadata } from "./googleclouddatalabelingv1beta1classificationmetadata";
import { GoogleCloudDatalabelingV1beta1GcsSource } from "./googleclouddatalabelingv1beta1gcssource";
import { GoogleCloudDatalabelingV1beta1TextMetadata } from "./googleclouddatalabelingv1beta1textmetadata";
export declare enum GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum {
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
export declare enum GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Image = "IMAGE",
    Video = "VIDEO",
    Text = "TEXT",
    GeneralData = "GENERAL_DATA"
}
/**
 * The configuration of input data, including data type, location, etc.
**/
export declare class GoogleCloudDatalabelingV1beta1InputConfig extends SpeakeasyBase {
    annotationType?: GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum;
    bigquerySource?: GoogleCloudDatalabelingV1beta1BigQuerySource;
    classificationMetadata?: GoogleCloudDatalabelingV1beta1ClassificationMetadata;
    dataType?: GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum;
    gcsSource?: GoogleCloudDatalabelingV1beta1GcsSource;
    textMetadata?: GoogleCloudDatalabelingV1beta1TextMetadata;
}
