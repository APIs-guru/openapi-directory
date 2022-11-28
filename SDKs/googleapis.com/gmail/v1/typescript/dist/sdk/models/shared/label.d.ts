import { SpeakeasyBase } from "../../../internal/utils";
import { LabelColor } from "./labelcolor";
export declare enum LabelLabelListVisibilityEnum {
    LabelShow = "labelShow",
    LabelShowIfUnread = "labelShowIfUnread",
    LabelHide = "labelHide"
}
export declare enum LabelMessageListVisibilityEnum {
    Show = "show",
    Hide = "hide"
}
export declare enum LabelTypeEnum {
    System = "system",
    User = "user"
}
/**
 * Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.
**/
export declare class Label extends SpeakeasyBase {
    color?: LabelColor;
    id?: string;
    labelListVisibility?: LabelLabelListVisibilityEnum;
    messageListVisibility?: LabelMessageListVisibilityEnum;
    messagesTotal?: number;
    messagesUnread?: number;
    name?: string;
    threadsTotal?: number;
    threadsUnread?: number;
    type?: LabelTypeEnum;
}
