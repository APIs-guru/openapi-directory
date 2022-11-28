import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryLabelAdded } from "./historylabeladded";
import { HistoryLabelRemoved } from "./historylabelremoved";
import { Message } from "./message";
import { HistoryMessageAdded } from "./historymessageadded";
import { HistoryMessageDeleted } from "./historymessagedeleted";
/**
 * A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.
**/
export declare class History extends SpeakeasyBase {
    id?: string;
    labelsAdded?: HistoryLabelAdded[];
    labelsRemoved?: HistoryLabelRemoved[];
    messages?: Message[];
    messagesAdded?: HistoryMessageAdded[];
    messagesDeleted?: HistoryMessageDeleted[];
}
