import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AnnotatedMessagePart } from "./googleclouddialogflowv2annotatedmessagepart";
/**
 * Represents the result of annotation for the message.
**/
export declare class GoogleCloudDialogflowV2MessageAnnotation extends SpeakeasyBase {
    containEntities?: boolean;
    parts?: GoogleCloudDialogflowV2AnnotatedMessagePart[];
}
