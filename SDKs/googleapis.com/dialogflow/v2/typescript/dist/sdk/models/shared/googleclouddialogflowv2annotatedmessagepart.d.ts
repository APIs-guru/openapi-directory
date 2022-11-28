import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
**/
export declare class GoogleCloudDialogflowV2AnnotatedMessagePart extends SpeakeasyBase {
    entityType?: string;
    formattedValue?: any;
    text?: string;
}
