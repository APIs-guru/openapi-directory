import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AnnotatedMessagePart } from "./googleclouddialogflowv2beta1annotatedmessagepart";
/**
 * Represents the result of annotation for the message.
**/
export declare class GoogleCloudDialogflowV2beta1MessageAnnotation extends SpeakeasyBase {
    containEntities?: boolean;
    parts?: GoogleCloudDialogflowV2beta1AnnotatedMessagePart[];
}
