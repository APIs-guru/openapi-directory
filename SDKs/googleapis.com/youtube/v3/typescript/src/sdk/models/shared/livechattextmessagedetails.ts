import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveChatTextMessageDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageText" })
  messageText?: string;
}
