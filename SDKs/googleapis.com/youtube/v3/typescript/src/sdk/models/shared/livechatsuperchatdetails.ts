import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveChatSuperChatDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountDisplayString" })
  amountDisplayString?: string;

  @Metadata({ data: "json, name=amountMicros" })
  amountMicros?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=tier" })
  tier?: number;

  @Metadata({ data: "json, name=userComment" })
  userComment?: string;
}
