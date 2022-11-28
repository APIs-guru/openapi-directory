import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



export class HistoryMessageDeleted extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: Message;
}
