import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Message } from "./message";


export class HistoryMessageDeleted extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: Message;
}
