import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



export class ListMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages?: Message[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resultSizeEstimate" })
  resultSizeEstimate?: number;
}
