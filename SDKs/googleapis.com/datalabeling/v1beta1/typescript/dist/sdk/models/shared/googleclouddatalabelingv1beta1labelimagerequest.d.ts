import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1PolylineConfig } from "./googleclouddatalabelingv1beta1polylineconfig";
import { GoogleCloudDatalabelingV1beta1SegmentationConfig } from "./googleclouddatalabelingv1beta1segmentationconfig";
export declare enum GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    Classification = "CLASSIFICATION",
    BoundingBox = "BOUNDING_BOX",
    OrientedBoundingBox = "ORIENTED_BOUNDING_BOX",
    BoundingPoly = "BOUNDING_POLY",
    Polyline = "POLYLINE",
    Segmentation = "SEGMENTATION"
}
/**
 * Request message for starting an image labeling task.
**/
export declare class GoogleCloudDatalabelingV1beta1LabelImageRequest extends SpeakeasyBase {
    basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
    feature?: GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum;
    imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
    polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;
    segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;
}
