import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveChatMessageRetractedDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=retractedMessageId" })
  retractedMessageId?: string;
}
