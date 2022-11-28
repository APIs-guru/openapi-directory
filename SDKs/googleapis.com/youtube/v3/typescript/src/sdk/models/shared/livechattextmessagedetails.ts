import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveChatTextMessageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageText" })
  messageText?: string;
}
