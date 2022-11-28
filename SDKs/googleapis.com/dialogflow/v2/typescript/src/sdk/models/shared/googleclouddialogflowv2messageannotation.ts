import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AnnotatedMessagePart } from "./googleclouddialogflowv2annotatedmessagepart";



// GoogleCloudDialogflowV2MessageAnnotation
/** 
 * Represents the result of annotation for the message.
**/
export class GoogleCloudDialogflowV2MessageAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containEntities" })
  containEntities?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: GoogleCloudDialogflowV2AnnotatedMessagePart })
  parts?: GoogleCloudDialogflowV2AnnotatedMessagePart[];
}
