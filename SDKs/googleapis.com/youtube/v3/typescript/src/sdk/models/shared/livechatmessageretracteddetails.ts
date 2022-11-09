import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveChatMessageRetractedDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=retractedMessageId" })
  retractedMessageId?: string;
}
