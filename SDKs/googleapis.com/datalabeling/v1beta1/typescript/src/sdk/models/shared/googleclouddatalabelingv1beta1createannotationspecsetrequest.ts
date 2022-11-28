import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpecSet } from "./googleclouddatalabelingv1beta1annotationspecset";



// GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest
/** 
 * Request message for CreateAnnotationSpecSet.
**/
export class GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
}
