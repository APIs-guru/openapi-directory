import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveChatMessageDeletedDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedMessageId" })
  deletedMessageId?: string;
}
