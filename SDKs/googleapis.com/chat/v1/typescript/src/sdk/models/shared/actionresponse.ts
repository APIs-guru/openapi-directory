import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DialogAction } from "./dialogaction";

export enum ActionResponseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    NewMessage = "NEW_MESSAGE"
,    UpdateMessage = "UPDATE_MESSAGE"
,    UpdateUserMessageCards = "UPDATE_USER_MESSAGE_CARDS"
,    RequestConfig = "REQUEST_CONFIG"
,    Dialog = "DIALOG"
}


// ActionResponse
/** 
 * Parameters that a Chat app can use to configure how it's response is posted.
**/
export class ActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dialogAction" })
  dialogAction?: DialogAction;

  @Metadata({ data: "json, name=type" })
  type?: ActionResponseTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
