import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dr-callback-url" })
  drCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=max-calls-per-second" })
  maxCallsPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=max-inbound-request" })
  maxInboundRequest?: number;

  @SpeakeasyMetadata({ data: "json, name=max-outbound-request" })
  maxOutboundRequest?: number;

  @SpeakeasyMetadata({ data: "json, name=mo-callback-url" })
  moCallbackUrl?: string;
}
