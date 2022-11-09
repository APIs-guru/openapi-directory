import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1BoundingPoly } from "./googleclouddatalabelingv1beta1boundingpoly";
import { GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly } from "./googleclouddatalabelingv1beta1normalizedboundingpoly";


// GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation
/** 
 * Image bounding poly annotation. It represents a polygon including bounding box in the image.
**/
export class GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly;

  @Metadata({ data: "json, name=normalizedBoundingPoly" })
  normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;
}
