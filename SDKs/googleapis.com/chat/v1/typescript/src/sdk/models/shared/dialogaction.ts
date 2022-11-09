import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionStatus } from "./actionstatus";
import { Dialog } from "./dialog";


// DialogAction
/** 
 * Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.
**/
export class DialogAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionStatus" })
  actionStatus?: ActionStatus;

  @Metadata({ data: "json, name=dialog" })
  dialog?: Dialog;
}
