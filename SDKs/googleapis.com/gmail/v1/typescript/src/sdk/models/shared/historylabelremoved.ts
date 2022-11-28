import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



export class HistoryLabelRemoved extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: Message;
}
