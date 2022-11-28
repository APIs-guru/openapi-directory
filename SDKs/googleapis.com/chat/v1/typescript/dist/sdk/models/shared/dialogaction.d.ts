import { SpeakeasyBase } from "../../../internal/utils";
import { ActionStatus } from "./actionstatus";
import { Dialog } from "./dialog";
/**
 * Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.
**/
export declare class DialogAction extends SpeakeasyBase {
    actionStatus?: ActionStatus;
    dialog?: Dialog;
}
