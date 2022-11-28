import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimestampResConversation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=destroyed" })
  destroyed?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;
}
