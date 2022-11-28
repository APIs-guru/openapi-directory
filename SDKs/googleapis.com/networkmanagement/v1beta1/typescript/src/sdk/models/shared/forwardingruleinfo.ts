import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ForwardingRuleInfo
/** 
 * For display only. Metadata associated with a Compute Engine forwarding rule.
**/
export class ForwardingRuleInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=matchedPortRange" })
  matchedPortRange?: string;

  @SpeakeasyMetadata({ data: "json, name=matchedProtocol" })
  matchedProtocol?: string;

  @SpeakeasyMetadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=vip" })
  vip?: string;
}
