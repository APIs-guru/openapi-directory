import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labelsAdded", elemType: shared.HistoryLabelAdded })
  labelsAdded?: HistoryLabelAdded[];

  @Metadata({ data: "json, name=labelsRemoved", elemType: shared.HistoryLabelRemoved })
  labelsRemoved?: HistoryLabelRemoved[];

  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: Message[];

  @Metadata({ data: "json, name=messagesAdded", elemType: shared.HistoryMessageAdded })
  messagesAdded?: HistoryMessageAdded[];

  @Metadata({ data: "json, name=messagesDeleted", elemType: shared.HistoryMessageDeleted })
  messagesDeleted?: HistoryMessageDeleted[];
}
