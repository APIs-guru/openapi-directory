import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DialogAction } from "./dialogaction";


export enum ActionResponseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    NewMessage = "NEW_MESSAGE",
    UpdateMessage = "UPDATE_MESSAGE",
    UpdateUserMessageCards = "UPDATE_USER_MESSAGE_CARDS",
    RequestConfig = "REQUEST_CONFIG",
    Dialog = "DIALOG"
}


// ActionResponse
/** 
 * Parameters that a Chat app can use to configure how it's response is posted.
**/
export class ActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dialogAction" })
  dialogAction?: DialogAction;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ActionResponseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
