import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1OperatorMetadata } from "./googleclouddatalabelingv1beta1operatormetadata";


// GoogleCloudDatalabelingV1beta1AnnotationMetadata
/** 
 * Additional information associated with the annotation.
**/
export class GoogleCloudDatalabelingV1beta1AnnotationMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorMetadata" })
  operatorMetadata?: GoogleCloudDatalabelingV1beta1OperatorMetadata;
}
