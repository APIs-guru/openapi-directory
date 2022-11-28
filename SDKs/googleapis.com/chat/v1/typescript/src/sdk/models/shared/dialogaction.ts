import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionStatus } from "./actionstatus";
import { Dialog } from "./dialog";



// DialogAction
/** 
 * Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.
**/
export class DialogAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionStatus" })
  actionStatus?: ActionStatus;

  @SpeakeasyMetadata({ data: "json, name=dialog" })
  dialog?: Dialog;
}
