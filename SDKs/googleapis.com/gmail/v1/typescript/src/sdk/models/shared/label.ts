import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LabelColor } from "./labelcolor";

export enum LabelLabelListVisibilityEnum {
    LabelShow = "labelShow"
,    LabelShowIfUnread = "labelShowIfUnread"
,    LabelHide = "labelHide"
}

export enum LabelMessageListVisibilityEnum {
    Show = "show"
,    Hide = "hide"
}

export enum LabelTypeEnum {
    System = "system"
,    User = "user"
}


// Label
/** 
 * Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.
**/
export class Label extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: LabelColor;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labelListVisibility" })
  labelListVisibility?: LabelLabelListVisibilityEnum;

  @Metadata({ data: "json, name=messageListVisibility" })
  messageListVisibility?: LabelMessageListVisibilityEnum;

  @Metadata({ data: "json, name=messagesTotal" })
  messagesTotal?: number;

  @Metadata({ data: "json, name=messagesUnread" })
  messagesUnread?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=threadsTotal" })
  threadsTotal?: number;

  @Metadata({ data: "json, name=threadsUnread" })
  threadsUnread?: number;

  @Metadata({ data: "json, name=type" })
  type?: LabelTypeEnum;
}
