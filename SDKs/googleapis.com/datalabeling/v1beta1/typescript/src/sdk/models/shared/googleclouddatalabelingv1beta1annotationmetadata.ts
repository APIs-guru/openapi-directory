import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1OperatorMetadata } from "./googleclouddatalabelingv1beta1operatormetadata";



// GoogleCloudDatalabelingV1beta1AnnotationMetadata
/** 
 * Additional information associated with the annotation.
**/
export class GoogleCloudDatalabelingV1beta1AnnotationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorMetadata" })
  operatorMetadata?: GoogleCloudDatalabelingV1beta1OperatorMetadata;
}
