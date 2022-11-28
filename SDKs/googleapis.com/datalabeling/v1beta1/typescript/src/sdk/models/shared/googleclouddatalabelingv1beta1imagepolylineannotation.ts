import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1NormalizedPolyline } from "./googleclouddatalabelingv1beta1normalizedpolyline";
import { GoogleCloudDatalabelingV1beta1Polyline } from "./googleclouddatalabelingv1beta1polyline";



// GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation
/** 
 * A polyline for the image annotation.
**/
export class GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @SpeakeasyMetadata({ data: "json, name=normalizedPolyline" })
  normalizedPolyline?: GoogleCloudDatalabelingV1beta1NormalizedPolyline;

  @SpeakeasyMetadata({ data: "json, name=polyline" })
  polyline?: GoogleCloudDatalabelingV1beta1Polyline;
}
