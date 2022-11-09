import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=dr-callback-url" })
  drCallbackUrl?: string;

  @Metadata({ data: "json, name=max-calls-per-second" })
  maxCallsPerSecond?: number;

  @Metadata({ data: "json, name=max-inbound-request" })
  maxInboundRequest?: number;

  @Metadata({ data: "json, name=max-outbound-request" })
  maxOutboundRequest?: number;

  @Metadata({ data: "json, name=mo-callback-url" })
  moCallbackUrl?: string;
}
