import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2AnnotatedMessagePart } from "./googleclouddialogflowv2annotatedmessagepart";


// GoogleCloudDialogflowV2MessageAnnotation
/** 
 * Represents the result of annotation for the message.
**/
export class GoogleCloudDialogflowV2MessageAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=containEntities" })
  containEntities?: boolean;

  @Metadata({ data: "json, name=parts", elemType: shared.GoogleCloudDialogflowV2AnnotatedMessagePart })
  parts?: GoogleCloudDialogflowV2AnnotatedMessagePart[];
}
