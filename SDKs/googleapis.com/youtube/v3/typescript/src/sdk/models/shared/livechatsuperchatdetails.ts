import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveChatSuperChatDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountDisplayString" })
  amountDisplayString?: string;

  @SpeakeasyMetadata({ data: "json, name=amountMicros" })
  amountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: number;

  @SpeakeasyMetadata({ data: "json, name=userComment" })
  userComment?: string;
}
