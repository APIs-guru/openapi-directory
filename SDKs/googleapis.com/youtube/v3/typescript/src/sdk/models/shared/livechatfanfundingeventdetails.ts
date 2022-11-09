import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveChatFanFundingEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountDisplayString" })
  amountDisplayString?: string;

  @Metadata({ data: "json, name=amountMicros" })
  amountMicros?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=userComment" })
  userComment?: string;
}
