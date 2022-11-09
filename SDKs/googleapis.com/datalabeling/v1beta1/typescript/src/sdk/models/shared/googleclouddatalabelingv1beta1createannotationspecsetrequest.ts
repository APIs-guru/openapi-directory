import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpecSet } from "./googleclouddatalabelingv1beta1annotationspecset";


// GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest
/** 
 * Request message for CreateAnnotationSpecSet.
**/
export class GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
}
