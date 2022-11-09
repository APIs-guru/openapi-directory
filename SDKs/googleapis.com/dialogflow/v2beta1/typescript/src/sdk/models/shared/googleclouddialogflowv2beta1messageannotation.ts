import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1AnnotatedMessagePart } from "./googleclouddialogflowv2beta1annotatedmessagepart";


// GoogleCloudDialogflowV2beta1MessageAnnotation
/** 
 * Represents the result of annotation for the message.
**/
export class GoogleCloudDialogflowV2beta1MessageAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=containEntities" })
  containEntities?: boolean;

  @Metadata({ data: "json, name=parts", elemType: shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart })
  parts?: GoogleCloudDialogflowV2beta1AnnotatedMessagePart[];
}
