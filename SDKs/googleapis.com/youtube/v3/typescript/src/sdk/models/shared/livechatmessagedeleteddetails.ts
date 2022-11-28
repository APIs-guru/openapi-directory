import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveChatMessageDeletedDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedMessageId" })
  deletedMessageId?: string;
}
