import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1NormalizedPolyline } from "./googleclouddatalabelingv1beta1normalizedpolyline";
import { GoogleCloudDatalabelingV1beta1Polyline } from "./googleclouddatalabelingv1beta1polyline";


// GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation
/** 
 * A polyline for the image annotation.
**/
export class GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @Metadata({ data: "json, name=normalizedPolyline" })
  normalizedPolyline?: GoogleCloudDatalabelingV1beta1NormalizedPolyline;

  @Metadata({ data: "json, name=polyline" })
  polyline?: GoogleCloudDatalabelingV1beta1Polyline;
}
