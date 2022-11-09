import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Message } from "./message";


export class HistoryLabelAdded extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @Metadata({ data: "json, name=message" })
  message?: Message;
}
