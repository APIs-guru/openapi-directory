import { SpeakeasyBase } from "../../../internal/utils";
import { DialogAction } from "./dialogaction";
export declare enum ActionResponseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    NewMessage = "NEW_MESSAGE",
    UpdateMessage = "UPDATE_MESSAGE",
    UpdateUserMessageCards = "UPDATE_USER_MESSAGE_CARDS",
    RequestConfig = "REQUEST_CONFIG",
    Dialog = "DIALOG"
}
/**
 * Parameters that a Chat app can use to configure how it's response is posted.
**/
export declare class ActionResponse extends SpeakeasyBase {
    dialogAction?: DialogAction;
    type?: ActionResponseTypeEnum;
    url?: string;
}
