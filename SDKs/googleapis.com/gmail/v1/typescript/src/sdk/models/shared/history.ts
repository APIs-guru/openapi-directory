import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryLabelAdded } from "./historylabeladded";
import { HistoryLabelRemoved } from "./historylabelremoved";
import { Message } from "./message";
import { HistoryMessageAdded } from "./historymessageadded";
import { HistoryMessageDeleted } from "./historymessagedeleted";



// History
/** 
 * A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.
**/
export class History extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labelsAdded", elemType: HistoryLabelAdded })
  labelsAdded?: HistoryLabelAdded[];

  @SpeakeasyMetadata({ data: "json, name=labelsRemoved", elemType: HistoryLabelRemoved })
  labelsRemoved?: HistoryLabelRemoved[];

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages?: Message[];

  @SpeakeasyMetadata({ data: "json, name=messagesAdded", elemType: HistoryMessageAdded })
  messagesAdded?: HistoryMessageAdded[];

  @SpeakeasyMetadata({ data: "json, name=messagesDeleted", elemType: HistoryMessageDeleted })
  messagesDeleted?: HistoryMessageDeleted[];
}
