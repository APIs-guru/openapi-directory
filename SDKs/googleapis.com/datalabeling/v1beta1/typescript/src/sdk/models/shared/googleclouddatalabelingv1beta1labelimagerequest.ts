import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1PolylineConfig } from "./googleclouddatalabelingv1beta1polylineconfig";
import { GoogleCloudDatalabelingV1beta1SegmentationConfig } from "./googleclouddatalabelingv1beta1segmentationconfig";

export enum GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED"
,    Classification = "CLASSIFICATION"
,    BoundingBox = "BOUNDING_BOX"
,    OrientedBoundingBox = "ORIENTED_BOUNDING_BOX"
,    BoundingPoly = "BOUNDING_POLY"
,    Polyline = "POLYLINE"
,    Segmentation = "SEGMENTATION"
}


// GoogleCloudDatalabelingV1beta1LabelImageRequest
/** 
 * Request message for starting an image labeling task.
**/
export class GoogleCloudDatalabelingV1beta1LabelImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicConfig" })
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

  @Metadata({ data: "json, name=boundingPolyConfig" })
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;

  @Metadata({ data: "json, name=feature" })
  feature?: GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum;

  @Metadata({ data: "json, name=imageClassificationConfig" })
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;

  @Metadata({ data: "json, name=polylineConfig" })
  polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;

  @Metadata({ data: "json, name=segmentationConfig" })
  segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;
}
