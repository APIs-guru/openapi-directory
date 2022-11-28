import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AnnotatedMessagePart } from "./googleclouddialogflowv2beta1annotatedmessagepart";



// GoogleCloudDialogflowV2beta1MessageAnnotation
/** 
 * Represents the result of annotation for the message.
**/
export class GoogleCloudDialogflowV2beta1MessageAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containEntities" })
  containEntities?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: GoogleCloudDialogflowV2beta1AnnotatedMessagePart })
  parts?: GoogleCloudDialogflowV2beta1AnnotatedMessagePart[];
}
