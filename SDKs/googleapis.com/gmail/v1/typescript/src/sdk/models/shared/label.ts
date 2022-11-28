import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelColor } from "./labelcolor";


export enum LabelLabelListVisibilityEnum {
    LabelShow = "labelShow",
    LabelShowIfUnread = "labelShowIfUnread",
    LabelHide = "labelHide"
}

export enum LabelMessageListVisibilityEnum {
    Show = "show",
    Hide = "hide"
}

export enum LabelTypeEnum {
    System = "system",
    User = "user"
}


// Label
/** 
 * Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.
**/
export class Label extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: LabelColor;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labelListVisibility" })
  labelListVisibility?: LabelLabelListVisibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=messageListVisibility" })
  messageListVisibility?: LabelMessageListVisibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=messagesTotal" })
  messagesTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=messagesUnread" })
  messagesUnread?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=threadsTotal" })
  threadsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=threadsUnread" })
  threadsUnread?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LabelTypeEnum;
}
