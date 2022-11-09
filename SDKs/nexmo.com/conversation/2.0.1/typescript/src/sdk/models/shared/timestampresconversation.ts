import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimestampResConversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=destroyed" })
  destroyed?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;
}
